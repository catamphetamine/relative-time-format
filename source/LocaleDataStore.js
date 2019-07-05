// Fallback locale.
// (when not a single one of the supplied "preferred" locales is available)
let defaultLocale = 'en'

// For all locales added
// their relative time formatter messages will be stored here.
const localesData = {}

// According to the spec BCP 47 language tags are case-insensitive.
// https://tools.ietf.org/html/rfc5646
const lowercaseLocaleLookup = {}

export function getDefaultLocale() {
  return defaultLocale
}

export function setDefaultLocale(locale) {
  defaultLocale = locale
}

/**
 * Gets locale data previously added by `addLocaleData()`.
 * @return  {object} [localeData]
 */
export function getLocaleData(locale) {
	return localesData[locale]
}

/**
 * Adds locale data.
 * Is called by `RelativeTimeFormat.addLocale(...)`.
 * @param  {object} localeData
 */
export function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error('No locale data passed')
  }
  // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.
  localesData[localeData.locale] = localeData
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale
}

/**
 * Returns a locale for which locale data has been added
 * via `RelativeTimeFormat.addLocale(...)`.
 * @param  {string} locale
 * @return {string} [locale]
 */
export function resolveLocale(locale) {
	if (localesData[locale]) {
		return locale
	}
	if (lowercaseLocaleLookup[locale.toLowerCase()]) {
		return lowercaseLocaleLookup[locale.toLowerCase()]
	}
}