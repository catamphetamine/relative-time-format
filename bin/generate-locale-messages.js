import path from 'path'
import fs from 'fs-extra'
import { isEqual } from 'lodash'

import extractRelativeTimeMessages from '../source/CLDR/extractRelativeTimeMessages'
import getLocalesListInCLDR from '../source/CLDR/getLocalesList'

// CLDR stubs missing translations with English ones.
// This can be used to find out whether a translation is missing.
const LONG_STYLE_TRANSLATION_STUB = `{
	"year": {
		"previous": "last year",
		"current": "this year",
		"next": "next year",
		"past": "-{0} y",
		"future": "+{0} y"
	}`

// Generate plurals first, then run this script.
// Generating plurals creates locale folder structure.
//
// ```
// npm run generate-locale-quantifiers
// npm run generate-locale-messages
// // npm run generate-load-all-locales
// ````
for (const locale of getLocalesListInCLDR())
{
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
		// Delete the locale folder.
		// (previously created by `npm run generate-locale-quantifiers`).
		fs.removeSync(path.join(__dirname, '../locale', locale))
		continue
	}

	// console.log(locale)

	// "language" is the top-most parent locale of the `locale`.
	const language = locale.split('-')[0]

	// For "pt" language the relative time messages seem to be different
	// from all other "pt-" variations which are identical to "pt-PT".
	// Seems like a bug in CLDR.
	// To reduce the resulting bundle size "pt" language is discarded
	// and "pt-PT" is used instead. All other "pt-" variations
	// seems to be identical to "pt-PT" so they're not included.
	const localeInCLDR = locale === 'pt' ? 'pt-PT' : locale

	const cldrJsonPath = `cldr-dates-full/main/${localeInCLDR}/dateFields.json`
	const localeDirectory = path.join(__dirname, '../locale', locale)
	const languageDirectory = path.join(__dirname, '../locale', language)

	// Find the directory containing `quantify.js` for this locale (if any).
	//
	// For `pt` language `quantify.js` is really weird and seems to be a "no op".
	// Seems like a bug in CLDR data.
	// So replacing `pt/quantify.js` with `pt-PT/quantify.js` here.
	//
	const quantifyDirectory = findQuantifyDirectory(localeInCLDR)

	const localeMessages = extractRelativeTimeMessages(require(cldrJsonPath))

	// "long" messages are always present.
	if (!localeMessages.long) {
		throw new Error(`Default (long) locale data is missing for locale "${locale}".`)
	}

	// If there are no translations for a locale then skip it.
	if (JSON.stringify(localeMessages.long, null, '\t').indexOf(LONG_STYLE_TRANSLATION_STUB) === 0) {
		// console.log(`No translation for "${locale}". Skipping.`)
		fs.removeSync(localeDirectory)
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

	// What are "narrow" and "short" styles and how are they constructed:
	// http://cldr.unicode.org/translation/plurals#TOC-Narrow-and-Short-Forms

	// Get quantify function code.
	let quantify
	let quantifySameAsFor
	if (quantifyDirectory) {
		quantify = fs.readFileSync(path.join(__dirname, '../locale', locale, quantifyDirectory, 'quantify.js'), 'utf-8')
		quantify = quantify.slice('module.exports='.length)
		quantifySameAsFor = quantifyDirectory.slice('../'.length)
	}

	const longMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'long')
	const shortMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'short')
	const narrowMessagesSameAsFor = findParentLocaleBundleHavingSameLabelsOfStyle(locale, localeMessages, 'narrow')

	// If this locale fully inherits from a parent locale then skip it.
	if (longMessagesSameAsFor &&
		longMessagesSameAsFor === shortMessagesSameAsFor &&
		longMessagesSameAsFor === narrowMessagesSameAsFor &&
		longMessagesSameAsFor === quantifySameAsFor) {
		// console.log(`Locale "${locale}" fully inherits from "${longMessagesSameAsFor}". Skipping.`)
		fs.removeSync(localeDirectory)
		continue
	}

	// Create `index.js` file in the locale directory.
	fs.outputFileSync(
		path.join(path.join(__dirname, '../locale', `${locale}.js`)),
		`
${longMessagesSameAsFor ? '// Equal to "' + longMessagesSameAsFor + '".' + '\n' : ''}var long = ${JSON.stringify(localeMessages.long, null, '\t')}\n
${shortMessagesSameAsFor ? '// Equal to "' + shortMessagesSameAsFor + '".' + '\n' : ''}var short = ${JSON.stringify(localeMessages.short, null, '\t')}\n
${narrowMessagesSameAsFor ? '// Equal to "' + narrowMessagesSameAsFor + '".' + '\n' : ''}var narrow = ${JSON.stringify(localeMessages.narrow, null, '\t')}
${quantify ? '\n' + (quantifySameAsFor ? '// Equal to "' + quantifySameAsFor + '".' + '\n' : '') + 'var quantify = ' + quantify + '\n' : ''}
module.exports = {
	locale: "${locale}",
	long: long,
	short: short,
	narrow: narrow${quantify ? ',\n\tquantify: quantify' : ''}
}
		`.trim()
	)
}

// "Fully inheriting" locales are not written to disk instead.
// // Remove all locales fully inherting from their parent locale.
// for (const locale of getLocaleBundlesList()) {
// 	if (findEqualParentLocaleBundle(locale)) {
// 		removeLocaleBundle(locale)
// 	}
// }

// Remove all locale directories.
for (const locale of getLocalesListGenerated()) {
	removeLocaleDirectory(locale)
}

// 	// Create `index.js` file in the locale directory.
// 	fs.outputFileSync(
// 		path.join(localeDirectory, 'index.js'),
// 		`
// module.exports = {
// 	${[
// 	"locale: '" + locale + "'",
// 	"long: require('" + createTimeLabels(locale, 'long', localeMessages) + "')",
// 	"short: require('" + createTimeLabels(locale, 'short', localeMessages) + "')",
// 	"narrow: require('" + createTimeLabels(locale, 'narrow', localeMessages) + "')",
// 	quantifyDirectory && ("quantify: require('" + quantifyDirectory + "/quantify')")
// 	]
// 	.filter(_ => _)
// 	.join(',\n\t')}
// }
// 		`.trim()
// 	)

// // Remove all locales containing just `index.js`
// // which means they're fully inherting from their parent locale.
// for (const locale of getLocalesListGenerated()) {
// 	const files = fs.readdirSync(path.join(__dirname, '../locale', locale))
// 	if (files.length === 1 && files[0] === 'index.js') {
// 		removeLocaleDirectory(locale)
// 	}
// }

// // Remove strange locales.
// removeLocaleDirectory('en-001')
// removeLocaleDirectory('en-150')
// removeLocaleDirectory('en-US-POSIX')
// removeLocaleDirectory('es-419')

// Remove strange locales.
removeLocaleBundle('en-001')
removeLocaleBundle('en-150')
removeLocaleBundle('en-US-POSIX')
removeLocaleBundle('es-419')

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
 * Returns a list of available locale directories.
 * @return {string[]}
 */
function getLocalesListGenerated() {
	return fs.readdirSync(path.join(__dirname, '../locale'))
		.filter(_ => fs.statSync(path.join(__dirname, '../locale', _)).isDirectory())
}

/**
 * Returns a list of available locale bundles.
 * @return {string[]}
 */
function getLocaleBundlesList() {
	return fs.readdirSync(path.join(__dirname, '../locale'))
		.filter(_ => fs.statSync(path.join(__dirname, '../locale', _)).isFile())
		.map(_ => _.replace(/\.js$/, ''))
}

/**
 * Creates a file with the time messages
 * of a given style for a given locale.
 * @param  {string} locale
 * @param  {string} style
 * @param  {object} localeMessages — Time messages object containing all styles.
 * @return {string} The relative path to the time messages file.
 */
function createTimeLabels(locale, style, localeMessages) {
	const content = JSON.stringify(localeMessages[style], null, '\t')
	// `sr-Cyrl-BA` -> `sr` -> `sr-Cyrl`.
	const parentLocale = findParentLocaleHavingFile(locale, `${style}.json`, {
		condition: (file) => fs.readFileSync(file, 'utf-8') === content
	})
	if (parentLocale) {
		return `../${parentLocale}/${style}.json`
	}
	fs.outputFileSync(path.join(__dirname, '../locale', locale, `${style}.json`), content)
	return `./${style}.json`
}

/**
 * Returns the relative path to a directory where
 * `quantify.js` resides for a given locale.
 * For example, there are different locales: "ar" and "ar-AE".
 * But their `quantify()` function is identical.
 * Therefore, it's only stored inside `ar` folder
 * and `getQuantifyDirectory('ar-AE')` is "../ar".
 * @param  {string} locale
 * @return {string} [directory]
 */
function findQuantifyDirectory(locale) {
	// Look in this locale's folder.
	if (fs.existsSync(path.join(__dirname, '../locale', locale, 'quantify.js'))) {
		return '.'
	}
	// Look in parent locales' folders.
	// Example: `sr-Cyrl-BA` -> `sr` -> `sr-Cyrl`.
	const parentLocale = findParentLocaleHavingFile(locale, 'quantify.js')
	if (parentLocale) {
		return `../${parentLocale}`
	}
}

/**
 * Returns the relative path to a directory where
 * a given "flavor" (short, long, narrow) labels file
 * resides for a given locale.
 * @param  {string} locale
 * @param  {string} flavor
 * @return {string} [directory]
 */
function findFlavorDirectory(locale, flavour) {
	// Look in parent locales' folders.
	// Example: `sr-Cyrl-BA` -> `sr` -> `sr-Cyrl`.
	const parentLocale = findParentLocaleHavingFile(locale, `${flavour}.json`, { self: true })
	if (parentLocale) {
		if (parentLocale === locale) {
			return '.'
		}
		return `../${parentLocale}`
	}
}

/**
 * Some files are inherited from a parent locale to a child locale.
 * For example, there are different locales: "ar" and "ar-AE".
 * But their `quantify()` function is identical.
 * Therefore, it's only stored inside `ar` folder
 * and "ar-AE" locale reuses that file.
 * Starts searching from the most common locale to the most specific locale.
 * Example: `sr-Cyrl-BA` -> `sr` -> `sr-Cyrl`.
 * @param  {string} locale
 * @param  {string} fileName
 * @param  {object} [options]
 * @param  {boolean} [options.self] — Allow returning same `locale`.
 * @param  {function} [options.condition] — An extra condition imposed on the absolute file path of the file.
 * @return {string} [locale]
 */
function findParentLocaleHavingFile(locale, fileName, options = {}) {
	const restParts = locale.split('-')
	const parts = []
	let inheritFrom
	while (restParts.length > 0) {
		parts.push(restParts.shift())
		const parentLocale = parts.join('-')
		if (!options.self && parentLocale === locale) {
			continue
		}
		if (!fs.existsSync(path.join(__dirname, '../locale', parentLocale))) {
			continue
		}
		if (fs.existsSync(path.join(__dirname, '../locale', parentLocale, fileName))) {
			if (!options.condition || options.condition(path.join(__dirname, '../locale', parentLocale, fileName))) {
				inheritFrom = parentLocale
			}
		}
	}
	return inheritFrom
}

/**
 * Removes locale data directory.
 * @param  {string} locale
 */
function removeLocaleDirectory(locale) {
	fs.removeSync(path.resolve(__dirname, '../locale', locale))
}

/**
 * Removes locale data bundle file.
 * @param  {string} locale
 */
function removeLocaleBundle(locale) {
	fs.removeSync(path.resolve(__dirname, '../locale', `${locale}.js`))
}

// /**
//  * Finds a parent locale whose bundle is equal to that of the specified locale.
//  * @param  {string} locale
//  * @return {string} [parentLocale]
//  */
// function findEqualParentLocaleBundle(locale) {
// 	const parts = locale.split('-')
// 	parts.pop()
// 	while (parts.length > 0) {
// 		// `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
// 		const parentLocale = parts.join('-')
// 		if (fs.existsSync(path.resolve(__dirname, `../locale/${parentLocale}.js`))) {
// 			// Read the contents of `index.js` and compare it to parent locale's `index.js`.
// 			const content = fs.readFileSync(path.resolve(__dirname, `../locale/${locale}.js`), 'utf-8')
// 			const parentContent = fs.readFileSync(path.resolve(__dirname, `../locale/${parentLocale}.js`), 'utf-8')
// 			if (parentContent.replace(/locale: ".+?",/, '') === content.replace(/locale: ".+?",/, '')) {
// 				return parentLocale
// 			}
// 		}
// 		parts.pop()
// 	}
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
		if (fs.existsSync(path.resolve(__dirname, `../locale/${parentLocale}.js`))) {
			// Compare parent locale messages to those of the given locale.
			// const messages = require(path.resolve(__dirname, `../locale/${locale}.js`))
			const parentLocaleMessages = require(path.resolve(__dirname, `../locale/${parentLocale}.js`))
			if (isEqual(parentLocaleMessages[style], messages[style])) {
				return parentLocale
			}
		}
		length++
	}
}