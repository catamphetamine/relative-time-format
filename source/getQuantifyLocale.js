export default function getQuantifyLocale(locale) {
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
function getLanguageFromLanguageTag(languageTag) {
  const hyphenIndex = languageTag.indexOf('-')
  if (hyphenIndex > 0) {
    return languageTag.slice(0, hyphenIndex)
  }
  return languageTag
}
