// CLDR data package is periodically being updated.
// `npm install cldr-data@latest --save-dev`

import CLDR from 'cldr-data'
import plurals from 'make-plural'
import MakePlural from 'make-plural/make-plural'
import UglifyJS from 'uglify-js'
import path from 'path'
import fs from 'fs-extra'

import getLocalesListInCLDR from '../source/CLDR/getLocalesList'

const CLDR_LOCALES = getLocalesListInCLDR()

// Generate a pluralization function for each language
for (const locale of Object.keys(plurals)) {
	// // Some keys are locales, e.g. "pt-PT".
	// // (whatever that means)
	// const language = locale.split('-')[0]

	// Don't know what the "root" key is for so skip it.
	if (locale === 'root') {
		continue
	}

	// If this locale has no relative time labels
	// in CLDR data then skip it.
	if (CLDR_LOCALES.indexOf(locale) < 0) {
		continue
	}

	// `make-plural` library converts
	// CLDR pluralization rules
	// into a javascript function.
	// https://github.com/eemeli/make-plural.js
	const MakePlurals = MakePlural.load(
		CLDR('supplemental/plurals'),
		// Ordinals aren't needed for relative date/time formatting
		// CLDR('supplemental/ordinals')
	)

	// Pluralization function code
	const functionCode = new MakePlurals(locale).toString('classify')

	// Minify pluralization function code
	let { error, code } = UglifyJS.minify(functionCode)

	if (error) {
		throw error
	}

	// Strip function name.
	code = code.replace('function classify(', 'function(')

	// If quantifier always returns "other"
	// it's as if it wasn't specified at all.
	if (code === 'function(n){return"other"}') {
		continue
	}

	// Write pluralization function to a file.
	fs.outputFileSync(
		path.join(__dirname, '../locale', locale, 'quantify.js'),
		`module.exports=${code}`
	)
}

/**
 * Returns a list of all locales supported by CLDR.
 * @return {string[]}
 */
function listAllCLDRLocales() {
	return fs.readdirSync(path.join(__dirname, '../node_modules/cldr-dates-full/main/'))
		.filter(name => fs.statSync(path.join(__dirname, '../node_modules/cldr-dates-full/main', name)).isDirectory())
}
