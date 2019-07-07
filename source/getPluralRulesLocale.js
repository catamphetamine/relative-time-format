/**
 * Returns a `locale` for which a function exists in `./PluralRuleFunctions.js`.
 * @param  {string} locale
 * @return {string}
 * @example
 * getPluralRulesLocale("ru-RU-Cyrl") // Returns "ru".
 */
export default function getPluralRulesLocale(locale) {
	// "pt" language is the only one having different pluralization rules
	// for the one ("pt") (Portuguese) locale and the other ("pt-PT") (European Portuguese).
	// http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
	// (see the entries for "pt" and "pt_PT" there)
	if (locale === 'pt-PT') {
		return locale
	}
	return getLanguageFromLanguageTag(locale)
}

/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */
const LANGUAGE_REG_EXP = /^([a-z0-9]+)/i
function getLanguageFromLanguageTag(languageTag) {
	const match = languageTag.match(LANGUAGE_REG_EXP)
	if (!match) {
		throw new TypeError(`Invalid locale: ${languageTag}`)
	}
	return match[1]
}
