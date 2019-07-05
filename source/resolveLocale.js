import {
  resolveLocale as resolveLocaleForData
} from './LocaleDataStore'

/**
 * Resolves a locale to a supported one (if any).
 * @param  {string} locale
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocale("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocale("xx-Latn")
 */
export default function resolveLocale(locale, options = {}) {
  const localeMatcher = options.localeMatcher || 'lookup'
  switch (localeMatcher) {
    case 'lookup':
      return resolveLocaleLookup(locale)
    // "best fit" locale matching is not supported.
    // https://github.com/catamphetamine/relative-time-format/issues/2
    case 'best fit':
      // return resolveLocaleBestFit(locale)
      return resolveLocaleLookup(locale)
    default:
      throw new RangeError(`Invalid "localeMatcher" option: ${localeMatcher}`)
  }
}

/**
 * Resolves a locale to a supported one (if any).
 * Starts from the most specific locale and gradually
 * falls back to less specific ones.
 * This is a basic implementation of the "lookup" algorithm.
 * https://tools.ietf.org/html/rfc4647#section-3.4
 * @param  {string} locale
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocaleLookup("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocaleLookup("xx-Latn")
 */
export function resolveLocaleLookup(locale) {
  const resolvedLocale = resolveLocaleForData(locale)
  if (resolvedLocale) {
    return resolvedLocale
  }
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  const parts = locale.split('-')
  while (locale.length > 1) {
    parts.pop()
    locale = parts.join('-')
    const resolvedLocale = resolveLocaleForData(locale)
    if (resolvedLocale) {
      return resolvedLocale
    }
  }
}
