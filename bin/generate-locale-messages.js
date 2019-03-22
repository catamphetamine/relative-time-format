import path from 'path'
import fs from 'fs-extra'
import { isEqual } from 'lodash'

// `make-plural` library converts CLDR pluralization rules into javascript code.
// https://github.com/eemeli/make-plural
import MakePlural from 'make-plural/make-plural'
import plurals from 'make-plural'

// CLDR packages should be periodically updated as they release new versions.
// `npm install cldr-data@latest cldr-dates-full@latest --save-dev`
import CLDR from 'cldr-data'

import extractRelativeTimeMessages from '../source/CLDR/extractRelativeTimeMessages'
import getLocalesListInCLDR from '../source/CLDR/getLocalesList'

const MakePlurals = MakePlural.load(
	CLDR('supplemental/plurals'),
	// Ordinals aren't needed for relative date/time formatting
	// CLDR('supplemental/ordinals')
)

// CLDR replaces missing translations with an English stub.
// This can be used to find out whether a translation is missing.
const LONG_STYLE_TRANSLATION_STUB = `{
	"year": {
		"previous": "last year",
		"current": "this year",
		"next": "next year",
		"past": "-{0} y",
		"future": "+{0} y"
	}`

// `quantify` functions are not stored in JSON files because they're not strings
// therefore all of them are stored in a separate `locale/quantify.js` file.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.
const quantifyFunctions = {}
const quantifyFunctionAliases = {}

// Generate plurals first, then run this script.
// Generating plurals creates locale folder structure.
//
// ```
// npm run generate-locale-quantifiers
// npm run generate-locale-messages
// // npm run generate-load-all-locales
// ````
for (const locale of getLocalesListInCLDR()) {
	if (
		// Different variations of "en" language have `en/short.json` and `en/narrow.json`
		// which differ from one another by a simple dot, e.g. `yr.` vs `yr`.
		// To reduce the resulting bundle size this dot difference is considered unimportant.
		locale.indexOf('en-') === 0 ||
		// For "pt" language the relative time messages seem to be different
		// from all other "pt-" variations which are identical to "pt-PT".
		// Seems like a bug in CLDR.
		// To reduce the resulting bundle size "pt" language is discarded
		// and "pt-PT" is used instead. All other "pt-" variations
		// seems to be identical to "pt-PT" so they're not included.
		locale.indexOf('pt-') === 0
	) {
		continue
	}

	// "language" is the top-most parent locale of the `locale`.
	const language = locale.split('-')[0]

	// For "pt" language the relative time messages seem to be different
	// from all other "pt-" variations which are identical to "pt-PT".
	// Seems like a bug in CLDR.
	// To reduce the resulting bundle size "pt" language is discarded
	// and "pt-PT" is used instead. All other "pt-" variations
	// seems to be identical to "pt-PT" so they're not included.
	//
	// Also for "pt" language `quantify` is really weird and seems to be a "no op".
	// Seems like a bug in CLDR data.
	// So using "pt-PT"'s `quantify` instead.
	//
	const localeInCLDR = locale === 'pt' ? 'pt-PT' : locale

	const cldrJsonPath = `cldr-dates-full/main/${localeInCLDR}/dateFields.json`
	const localeDirectory = path.join(__dirname, '../locale', locale)
	const languageDirectory = path.join(__dirname, '../locale', language)

	const localeMessages = extractRelativeTimeMessages(require(cldrJsonPath))

	// "long" messages are always present.
	if (!localeMessages.long) {
		throw new Error(`Default (long) locale data is missing for locale "${locale}".`)
	}

	// If there are no translations for a locale then skip it.
	if (JSON.stringify(localeMessages.long, null, '\t').indexOf(LONG_STYLE_TRANSLATION_STUB) === 0) {
		// console.log(`No translation for "${locale}". Skipping.`)
		continue
	}

	// "short" messages are always present.
	if (!localeMessages.short) {
		throw new Error(`Short locale data is missing for locale "${locale}".`)
	}

	// "narrow" messages are always present.
	if (!localeMessages.narrow) {
		throw new Error(`Narrow locale data is missing for locale "${locale}".`)
	}

	// Drop duplicate quantifier messages.
	compactQuantifiersData(localeMessages.long)
	compactQuantifiersData(localeMessages.short)
	compactQuantifiersData(localeMessages.narrow)

	// An explanation of what are "narrow" and "short" styles and how are they constructed:
	// http://cldr.unicode.org/translation/plurals#TOC-Narrow-and-Short-Forms

	const longMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'long')
	const shortMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'short')
	const narrowMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'narrow')

	// If this locale fully inherits from a parent locale then skip it.
	if (longMessagesSameAsFor &&
		longMessagesSameAsFor === shortMessagesSameAsFor &&
		longMessagesSameAsFor === narrowMessagesSameAsFor) {
		// console.log(`Locale "${locale}" fully inherits from "${longMessagesSameAsFor}". Skipping.`)
		continue
	}

	// Get quantify function code.
	const quantify = getQuantifyFunctionCode(language, locale)
	// If quantify function is defined for this language then add it to `quantify.js`.
	if (quantify && !quantifyFunctions[language]) {
		// If this quantify function is a duplicate of an already existing one
		// then don't add its code to the list.
		for (const _locale of Object.keys(quantifyFunctions)) {
			if (quantifyFunctions[_locale] === quantify) {
				// Just alias it.
				quantifyFunctionAliases[language] = _locale
			}
		}
		// If this quantify function is not a duplicate than add its code to the list.
		if (!quantifyFunctionAliases[language]) {
			quantifyFunctions[language] = quantify
		}
	}

	// Create `${locale}.json` file in the "locales" directory.
	fs.outputFileSync(
		path.join(path.join(__dirname, '../locale', `${locale}.json`)),
		`
{
	"locale": "${locale}",
	"long": ${stringifyMessages(localeMessages.long)},
	"short": ${stringifyMessages(localeMessages.short)},
	"narrow": ${stringifyMessages(localeMessages.narrow)}
}
		`.trim()
	)
}

// Output quantify functions for all locales.
fs.outputFileSync(
	path.join(__dirname, '../source/quantify.js'),
		'// (this file was autogenerated by `generate-locales`)' + '\n' +
		'// `quantify` functions are not stored in locale JSON files because they\'re not strings.' + '\n' +
		'// This file isn\'t big — it\'s about 5 kilobytes in size (minified).' + '\n' +
		'// Alternatively, the pluralization rules for each locale could be stored' + '\n' +
		'// in their JSON files in a non-parsed form and later parsed via `make-plural` library.' + '\n' +
		'// But `make-plural` library itself is relatively big in size:' + '\n' +
		'// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).' + '\n' +
		'// So, it\'s more practical to bypass runtime `make-plural` pluralization rules compilation' + '\n' +
		'// and just include the already compiled pluarlization rules for all locales in the library code.' + '\n' +
		'\n' +
		'var $ = {' + '\n' +
		Object.keys(quantifyFunctions).map(locale => `\t${locale}: ${tabulate(quantifyFunctions[locale], 1).slice(1)}`).join(',\n') +
		'\n}' + '\n\n' +
		Object.keys(quantifyFunctionAliases).map(locale => `$.${locale} = $.${quantifyFunctionAliases[locale]}`).join('\n') +
		'\n\n' +
		'export default $'
)

// Remove strange locales.
removeLocaleBundle('en-001')
removeLocaleBundle('en-150')
removeLocaleBundle('en-US-POSIX')
removeLocaleBundle('es-419')

function getQuantifyFunctionCode(language, locale) {
	// All pluralization functions are available for their respective languages
	// except for Portuguese which has pluralizations defined for both "pt" and "pt-PT".
	// The one for "pt" is correct: 0..1 — "one", rest — "other".
	// The one for "pt-PT" is a weird one, so I'm just skipping it.
	//
	// function(n) {
	//   var s = String(n).split('.'), v0 = !s[1];
	//   return (n == 1 && v0) ? 'one' : 'other';
	// }
	//
	// It says "if `n` is `1` AND it's an integer, then it's `one`, otherwise `other`".
	// If `n` is `1` then it already means that it's an integer, so it's redundant at the very least.
	// And in "pt" pluralization rules `0` also should be "one" but in "pt-PT" pluralization function it's "other".
	// https://github.com/unicode-cldr/cldr-core/commit/c4bab967824090463b10d4f8662ea29cdd4ae3cf#r32876547
	//
	// Seems like a bug in CLDR data.
	// The CLDR website page only lists "pt":
	// http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
	if (locale === 'pt-PT') {
		locale = 'pt'
	}
	// All locales supported by `make-plurals` are languages
	// except for the "pt-PT" locale which is most likely a bug so it's ignored.
	// Verifies that the pluralization rule for the locale is same as for the language.
	// (just in case)
	while (locale !== language) {
		if (plurals.hasOwnProperty(locale)) {
			throw new Error(`Different pluralization functions found for locale "${locale}" and language "${language}"`)
		}
		const parts = locale.split('-')
		parts.pop()
		locale = parts.join('-')
	}
	if (plurals.hasOwnProperty(language)) {
		return new MakePlurals(language).toString('classify')
	}
}

/**
 * CLDR data always has relative time messages duplicated
 * for all keys if they're the same.
 * For example, if relative time messages are the same for
 * "one", "many" and "other" they will still be duplicated
 * in CLDR data files.
 * This function removes such duplication to reduce the
 * resulting bundle size.
 * Mutates the object passed as the argument directly.
 * @param {object} flavor — Relative time messages of a given flavor.
 */
function compactQuantifiersData(flavour) {
	for (const unit of Object.keys(flavour)) {
		for (const pastOrFuture of Object.keys(flavour[unit])) {
			for (const quantifier of Object.keys(flavour[unit][pastOrFuture])) {
				// "other" is the one holding the relative time message in case of duplication.
				if (quantifier === 'other') {
					continue
				}
				if (flavour[unit][pastOrFuture][quantifier] === flavour[unit][pastOrFuture].other) {
					delete flavour[unit][pastOrFuture][quantifier]
				}
			}
		}
	}
}

/**
 * Removes locale data bundle file.
 * @param  {string} locale
 */
function removeLocaleBundle(locale) {
	fs.removeSync(path.resolve(__dirname, '../locale', `${locale}.js`))
}

/**
 * Finds a parent locale whose messages of a given style are equal to that of the specified locale.
 * @param  {string} locale
 * @return {string} [parentLocale]
 */
function findParentLocaleBundleHavingSameLabelsOfStyle(locale, messages, style) {
	const parts = locale.split('-')
	let length = 1
	while (length < parts.length) {
		// `sr-Cyrl-BA` -> `sr` -> `sr-Cyrl`.
		const parentLocale = parts.slice(0, length).join('-')
		if (fs.existsSync(path.resolve(__dirname, `../locale/${parentLocale}.json`))) {
			// Compare parent locale messages to those of the given locale.
			// const messages = require(path.resolve(__dirname, `../locale/${locale}.json`))
			const parentLocaleMessages = require(path.resolve(__dirname, `../locale/${parentLocale}.json`))
			if (isEqual(parentLocaleMessages[style], messages[style])) {
				return parentLocale
			}
		}
		length++
	}
}

function stringifyMessages(messages) {
	return JSON.stringify(messages, null, '\t')
		.split('\n')
		.map((_, i) => i === 0 ? _ : '\t' + _)
		.join('\n')
}

function tabulate(code, count) {
	return code.split('\n').map(_ => '\t'.repeat(count) + convertSpacesToTabs(_)).join('\n')
}

function convertSpacesToTabs(text) {
	let spacesToTabs
	while ((spacesToTabs = text.replace(/^(\t*)  /, '$1\t')) !== text) {
		text = spacesToTabs
	}
	return text
}