import path from 'path'
import fs from 'fs-extra'
import { isEqual } from 'lodash-es'

// `make-plural` library converts CLDR pluralization rules into javascript code.
// https://github.com/eemeli/make-plural
import { Compiler } from 'make-plural-compiler'
import * as Plurals from 'make-plural/plurals'

// CLDR packages should be periodically updated as they release new versions.
// `npm install cldr-core@latest cldr-dates-full@latest --save-dev`
import plurals from 'cldr-core/supplemental/plurals.json' assert { type: 'json' }
// import ordinals from 'cldr-core/supplemental/ordinals.json' assert { type: 'json' }

import extractRelativeTimeMessages from '../source/CLDR/extractRelativeTimeMessages.js'
import getLocalesListInCLDR from '../source/CLDR/getLocalesList.js'
import getPluralRulesLocale from '../source/getPluralRulesLocale.js'

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

// Additional locales that're not present in CLDR data.
const OTHER_LOCALES = [
	// Esperanto.
	// https://gitlab.com/catamphetamine/relative-time-format/-/merge_requests/1
	'eo'
]

// "Plural rules" functions are not stored in JSON files because they're not strings
// therefore all of them are stored in a separate `locale/PluralRuleFunctions.js` file.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.
const pluralRuleFunctions = {}
const pluralRuleFunctionAliases = {}

// Load "plurals".
Compiler.load(
	plurals,
	// Ordinals aren't needed for relative date/time formatting
	// ordinals
)

// const localesListInMakePlurals = Object.keys(Plurals)

const ALL_LOCALES = getLocalesListInCLDR()

for (const locale of ALL_LOCALES) {
	writeLocaleData(locale, {
		pluralRuleFunctions,
		pluralRuleFunctionAliases
	})
}

for (const locale of OTHER_LOCALES) {
	if (ALL_LOCALES[locale]) {
		throw new Error(`Locale "${locale}" is already present in CLDR data. Remove it from "OTHER_LOCALES" list.`);
	}

	const localeMessages = {
		short: readJsonFromFile(path.resolve(`./locale-other/${locale}/short.json`)),
		narrow: readJsonFromFile(path.resolve(`./locale-other/${locale}/narrow.json`)),
		long: readJsonFromFile(path.resolve(`./locale-other/${locale}/long.json`))
	}

	writeLocaleFiles(locale, localeMessages)
}

addLocaleExports(ALL_LOCALES)

// Output "plural rules" functions for all locales.
writePluralRulesFunctions({
	pluralRuleFunctions,
	pluralRuleFunctionAliases
})

// // Remove strange locales.
// removeLocaleBundle('en-001')
// removeLocaleBundle('en-150')

// All locales supported by `make-plurals` are languages
// except for the "pt-PT" locale which is a weird one
// with Portuguese pluralization rules being different
// for Europe (0 dia, 1.5 dia) and non-Europe (0 dias, 1.5 dias).
function getPluralRuleFunctionCode(locale) {
	if (Plurals[locale]) {
		const expectedLocale = getPluralRulesLocale(locale)
		if (locale !== expectedLocale) {
			throw new Error(`Expected to find pluralization rules for "${expectedLocale}" locale but found them for "${locale}" locale`)
		}
		return {
			locale,
			quantify: new Compiler(locale).compile().toString()
		}
	}
	const parts = locale.split('-')
	parts.pop()
	locale = parts.join('-')
	if (locale) {
		return getPluralRuleFunctionCode(locale)
	}
	// Not found.
	return {}
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
function compactPluralRulesData(flavour) {
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

// /**
//  * Removes locale data bundle file.
//  * @param  {string} locale
//  */
// function removeLocaleBundle(locale) {
// 	fs.removeSync(path.resolve(`./locale/${locale}.json`))
// }

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
		if (fs.existsSync(path.resolve(`./locale/${parentLocale}.json`))) {
			// Compare parent locale messages to those of the given locale.
			// const messages = readJsonFromFile(path.resolve(`./locale/${locale}.json`))
			const parentLocaleMessages = readJsonFromFile(path.resolve(`./locale/${parentLocale}.json`))
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

/**
 * Returns a given "style" (short, long, narrow) labels if the file exists.
 * @param  {string} locale
 * @param  {string} style
 * @return {object} [json]
 */
function findStyle(locale, style) {
	if (fs.existsSync(path.join('./locale-more-styles', locale, `${style}.json`))) {
		return readJsonFromFile(path.join('./locale-more-styles', locale, `${style}.json`))
	}
}

function readJsonFromFile(path) {
	return JSON.parse(fs.readFileSync(path, 'utf8'))
}

function writeLocaleData(locale, { pluralRuleFunctions, pluralRuleFunctionAliases }) {
	// "pt" language is weird because there're the regular "pt" (Portuguese),
	// the "pt-PT" (European Portuguese) and various "pt-XX"s.
	//
	// For "pt" language the relative time messages seem to be different
	// from all other "pt-" variations which seem to be identical to "pt-PT".
	//
	// Also, "plural rules" function for "pt" language is different from "pt-PT".
	// It's the only case when there's a "plural rules" function for a locale
	// instead of a language.
	// http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
	// (See "pt" vs "pt_PT" there)

	// For English there're different variations of "en" language
	// which differ from one another by a simple dot, e.g. "yr." vs "yr".

	const cldrJsonPath = `./node_modules/cldr-dates-full/main/${locale}/dateFields.json`
	const localeMessages = extractRelativeTimeMessages(readJsonFromFile(cldrJsonPath))

	// "long" messages are always present.
	if (!localeMessages.long) {
		throw new Error(`Default (long) locale data is missing for locale "${locale}".`)
	}

	// If there are no translations for a locale then skip it.
	if (JSON.stringify(localeMessages.long, null, '\t').indexOf(LONG_STYLE_TRANSLATION_STUB) === 0) {
		console.log(`Locale "${locale}" doesn't have translated messages. Skipping.`)
		return
	}

	// "short" messages are always present.
	if (!localeMessages.short) {
		throw new Error(`Short locale data is missing for locale "${locale}".`)
	}

	// "narrow" messages are always present.
	if (!localeMessages.narrow) {
		throw new Error(`Narrow locale data is missing for locale "${locale}".`)
	}

	// Drop duplicate pluralized messages.
	compactPluralRulesData(localeMessages.long)
	compactPluralRulesData(localeMessages.short)
	compactPluralRulesData(localeMessages.narrow)

	// An explanation of what are "narrow" and "short" styles and how are they constructed:
	// http://cldr.unicode.org/translation/plurals#TOC-Narrow-and-Short-Forms

	const longMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'long')
	const shortMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'short')
	const narrowMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'narrow')

	// If this locale fully inherits from a parent locale then skip it.
	if (longMessagesSameAsFor &&
		longMessagesSameAsFor === shortMessagesSameAsFor &&
		longMessagesSameAsFor === narrowMessagesSameAsFor) {
		console.log(`Locale "${locale}" fully inherits from "${longMessagesSameAsFor}". Skipping.`)
		return
	}

	// Get "plural rules" function code.
	const { quantify, locale: quantifyLocale } = getPluralRuleFunctionCode(locale)
	// If "plural rules" function is defined for this locale then add it to `PluralRuleFunctions.js`.
	if (quantify && !pluralRuleFunctions[quantifyLocale]) {
		// If this "plural rules" function is a duplicate of an already existing one
		// then don't add its code to the list.
		for (const locale of Object.keys(pluralRuleFunctions)) {
			if (pluralRuleFunctions[locale] === quantify) {
				// Just alias it.
				pluralRuleFunctionAliases[quantifyLocale] = locale
			}
		}
		// If this "plural rules" function is not a duplicate than add its code to the list.
		if (!pluralRuleFunctionAliases[quantifyLocale]) {
			pluralRuleFunctions[quantifyLocale] = quantify
		}
	}

	writeLocaleFiles(locale, localeMessages)
}

function writeLocaleFiles(locale, localeMessages) {
	const styles = ['long', 'short', 'narrow']

	for (const style of styles) {
		// Validate that messages are present for this style for the locale.
		if (!localeMessages[style]) {
			throw new Error(`"${style}" messages not found for locale "${locale}"`);
		}

		// Create `${locale}/${style}.json` file in the "locales/${locale}" directory.
		fs.outputFileSync(
			path.join('./locale', locale, `${style}.json`),
			JSON.stringify({
				locale,
				style,
				...localeMessages[style]
			}, null, '\t')
		)

		// Create `${locale}/${style}.json.js` file in the "locales/${locale}" directory.
		//
		// Stupid Node.js can't even `import` JSON files.
		// https://stackoverflow.com/questions/72348042/typeerror-err-unknown-file-extension-unknown-file-extension-json-for-node
		// Using a `*.json.js` duplicate file workaround.
		//
		fs.outputFileSync(
			path.join('./locale', locale, `${style}.json.js`),
			'export default ' + JSON.stringify({
				locale,
				style,
				...localeMessages[style]
			}, null, '\t')
		)

		// Create `${locale}/${style}.json.d.ts` file in the "locales/${locale}" directory.
		fs.outputFileSync(
			path.join('./locale', locale, `${style}.json.d.ts`),
			`
import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: '${locale}';
	style: '${style}';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
			`.trim()
		)
	}

	// Create `${locale}.json` file in the "locales" directory.
	fs.outputFileSync(
		path.join('./locale', `${locale}.json`),
		JSON.stringify({
			locale,
			...localeMessages
		}, null, '\t')
	)

	// Create `${locale}.json.js` file in the "locales" directory.
	//
	// Stupid Node.js can't even `import` JSON files.
	// https://stackoverflow.com/questions/72348042/typeerror-err-unknown-file-extension-unknown-file-extension-json-for-node
	// Using a `*.json.js` duplicate file workaround.
	//
	fs.outputFileSync(
		path.join('./locale', `${locale}.json.js`),
		'export default ' + JSON.stringify({
			locale,
			...localeMessages
		}, null, '\t')
	)

	// Create `${locale}.json.d.ts` file in the "locales" directory.
	fs.outputFileSync(
		path.join('./locale', `${locale}.json.d.ts`),
		`
import { LocaleData } from '../index';

declare const localeData: LocaleData;
export default localeData;
		`.trim()
	)

	// Create `${locale}/package.json` file in the "locales/${locale}" directory.
	fs.outputFileSync(
		path.join('./locale', locale, 'package.json'),
		JSON.stringify({
			private: true,
			name: `relative-time-format/locale/${locale}`,
			main: `../${locale}.json`,
			module: `../${locale}.json.js`,
			types: `../${locale}.json.d.ts`,
			type: 'module',
			exports: {
				'.': {
					types: `../${locale}.json.d.ts`,
					import: `../${locale}.json.js`,
					require: `../${locale}.json`
				}
			},
			sideEffects: false
		}, null, '\t')
	)
}

// Outputs "plural rules" functions for all locales.
function writePluralRulesFunctions({
	pluralRuleFunctions,
	pluralRuleFunctionAliases
}) {
	fs.outputFileSync(
		path.resolve('./source/PluralRuleFunctions.js'),
			'// (this file was autogenerated by `generate-locales`)' + '\n' +
			'// "plural rules" functions are not stored in locale JSON files because they\'re not strings.' + '\n' +
			'// This file isn\'t big — it\'s about 5 kilobytes in size (minified).' + '\n' +
			'// Alternatively, the pluralization rules for each locale could be stored' + '\n' +
			'// in their JSON files in a non-parsed form and later parsed via `make-plural` library.' + '\n' +
			'// But `make-plural` library itself is relatively big in size:' + '\n' +
			'// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).' + '\n' +
			'// So, it\'s more practical to bypass runtime `make-plural` pluralization rules compilation' + '\n' +
			'// and just include the already compiled pluarlization rules for all locales in the library code.' + '\n' +
			'\n' +
			'var $ = {' + '\n' +
			Object.keys(pluralRuleFunctions).map(locale => `\t${locale}: ${tabulate(pluralRuleFunctions[locale], 1).slice(1)}`).join(',\n') +
			'\n}' + '\n\n' +
			Object.keys(pluralRuleFunctionAliases).map(locale => `$${locale.indexOf('-') > 0 ? '["' + locale + '"]' : '.' + locale} = $.${pluralRuleFunctionAliases[locale]}`).join('\n') +
			'\n\n' +
			'export default $'
	)
}

// Add `export` entries in `package.json`.
function addLocaleExports(ALL_LOCALES) {
	// Read `package.json` file.
	const packageJson = readJsonFromFile('./package.json')

	// Remove all locale exports.
	for (const path of Object.keys(packageJson.exports)) {
		if (path.startsWith('./locale/')) {
			delete packageJson.exports[path]
		}
	}

	// Re-add all locale exports.
	packageJson.exports = {
		...packageJson.exports,
		...ALL_LOCALES.reduce((all, locale) => {
			all[`./locale/${locale}.json`] = {
				types: `./locale/${locale}.json.d.ts`,
				import: `./locale/${locale}.json.js`,
				require: `./locale/${locale}.json`
			}
			all[`./locale/${locale}`] = {
				types: `./locale/${locale}.json.d.ts`,
				import: `./locale/${locale}.json.js`,
				require: `./locale/${locale}.json`
			}
			return all
		}, {})
	}

	// Save `package.json` file.
	fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n', 'utf8')
}

function getStyleVariableName(style) {
	return style.replace(/[a-zA-Z_\d]/g, '_')
}