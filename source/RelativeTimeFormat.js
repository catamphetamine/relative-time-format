import {
  getDefaultLocale,
  setDefaultLocale,
  getLocaleData,
  addLocaleData
} from './LocaleDataStore'

// Valid time units.
const UNITS = [
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "quarter",
  "year"
]

// Valid values for the `numeric` option.
const NUMERIC_VALUES = [
  "auto",
  "always"
]

// Valid values for the `style` option.
const STYLE_VALUES = [
  "long",
  "short",
  "narrow"
]

// Valid values for the `localeMatcher` option.
const LOCALE_MATCHER_VALUES = [
  "lookup",
  // "best-fit"
]

/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */
export default class RelativeTimeFormat {
  numeric = "always"
  style = "long"
  localeMatcher = "lookup"

  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.numeric="always"] - (Version >= 2) One of: "always", "auto".
   * @param {string} [options.localeMatcher="lookup"] - One of: "lookup", "best fit". Currently only "lookup" is supported.
   */
  constructor(locales = [], options = {}) {
    const {
      numeric,
      style,
      localeMatcher
    } = options

    // Set `numeric` option.
    if (numeric) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError(`Invalid "numeric" option: ${numeric}`)
      }
      this.numeric = numeric
    }

    // Set `style` option.
    if (style) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError(`Invalid "style" option: ${style}`)
      }
      this.style = style
    }

    // Set `localeMatcher` option.
    if (localeMatcher) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError(`Invalid "localeMatcher" option: ${localeMatcher}`)
      }
      this.localeMatcher = localeMatcher
    }

    // Convert `locales` to an array.
    if (typeof locales === 'string') {
      locales = [locales]
    }
    // Add default locale.
    locales.push(getDefaultLocale())
    // Choose the most appropriate locale.
    this.locale = RelativeTimeFormat.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0]
    if (!this.locale) {
      throw new TypeError("No supported locale was found")
    }
    this.locale = resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    })
  }

  /**
   * Formats time `value` in `units` (either in past or in future).
   * @param {number} value - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */
  format(value, unit) {
    return this.getRule(value, unit).replace('{0}', Math.abs(value))
  }

  /**
   * Formats time `value` in `units` (either in past or in future).
   * @param {number} value - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {Object[]} The parts (`{ type, value }`).
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Version 1.
   * // Returns [
   * //   { type: "literal", value: "in " },
   * //   { type: "day", value: "100" },
   * //   { type: "literal", value: " days" }
   * // ]
   * rtf.formatToParts(100, "day")
   * //
   * // Version 2.
   * // Returns [
   * //   { type: "literal", value: "in " },
   * //   { type: "integer", value: "100", unit: "day" },
   * //   { type: "literal", value: " days" }
   * // ]
   * rtf.formatToParts(100, "day")
   */
  formatToParts(value, unit) {
    const rule = this.getRule(value, unit)
    const valueIndex = rule.indexOf("{0}")
    // "yesterday"/"today"/"tomorrow".
    if (valueIndex < 0) {
      return [{
        type: "literal",
        value: rule
      }]
    }
    const parts = []
    if (valueIndex > 0) {
      parts.push({
        type: "literal",
        value: rule.slice(0, valueIndex)
      })
    }
    parts.push({
      unit,
      type: "integer",
      value: String(Math.abs(value))
    })
    if (valueIndex + "{0}".length < rule.length - 1) {
      parts.push({
        type: "literal",
        value: rule.slice(valueIndex + "{0}".length)
      })
    }
    return parts
  }

  /**
   * Returns formatting rule for `value` in `units` (either in past or in future).
   * @param {number} value - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "{0} days ago"
   * getRule(-2, "day")
   */
  getRule(value, unit) {
    if (UNITS.indexOf(unit) < 0) {
      throw new RangeError(`Unknown time unit: ${unit}.`)
    }
    // Get locale-specific time interval formatting rules
    // of a given `style` for the given value of measurement `unit`.
    //
    // E.g.:
    //
    // ```json
    // {
    //  "past": {
    //    "one": "a second ago",
    //    "other": "{0} seconds ago"
    //  },
    //  "future": {
    //    "one": "in a second",
    //    "other": "in {0} seconds"
    //  }
    // }
    // ```
    //
    const unitRules = getLocaleData(this.locale)[this.style][unit]
    // Special case for "yesterday"/"today"/"tomorrow".
    if (this.numeric === "auto" && unit === "day") {
      switch (value) {
        // "yesterday"
        case -1:
          if (unitRules.previous) {
            return unitRules.previous
          }
          break
        // "today"
        case 0:
          if (unitRules.current) {
            return unitRules.current
          }
          break
        // "tomorrow"
        case 1:
          if (unitRules.next) {
            return unitRules.next
          }
          break
      }
    }
    // Choose either "past" or "future" based on time `value` sign.
    // If there's only "other" then it's being collapsed.
    // (the resulting bundle size optimization technique)
    const quantifierRules = unitRules[value <= 0 ? "past" : "future"]
    if (typeof quantifierRules === "string") {
      return quantifierRules
    }
    // Quantify `value`.
    const quantify = getLocaleData(this.locale).quantify
    let quantifier = quantify && quantify(Math.abs(value))
    // There seems to be no such locale in CLDR
    // for which `quantify` is missing
    // and still `past` and `future` messages
    // contain something other than "other".
    /* istanbul ignore next */
    quantifier = quantifier || 'other'
    // "other" rule is supposed to be always present.
    // If only "other" rule is present then "rules" is not an object and is a string.
    return quantifierRules[quantifier]
  }

  /**
   * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
   * @return {Object}
   */
  resolvedOptions() {
    return {
      locale: this.locale,
      style: this.style,
      numeric: this.numeric
    }
  }
}

/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'es-PY']
 * var options = { localeMatcher: 'lookup' }
 * // Returns ["id", "es-PY"]
 * Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
 */
RelativeTimeFormat.supportedLocalesOf = function(locales, options = {}) {
  // Validate `localeMatcher` option.
  let { localeMatcher } = options
  if (localeMatcher) {
    if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
      throw new RangeError(`Invalid "localeMatcher" option: ${localeMatcher}`)
    }
    localeMatcher = localeMatcher
  } else {
    localeMatcher = 'lookup'
  }
  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales]
  }
  return locales.filter(locale => resolveLocale(locale, options))
}

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
export function resolveLocale(locale, options = {}) {
  let { localeMatcher } = options
  if (localeMatcher) {
    if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
      throw new RangeError(`Invalid "localeMatcher" option: ${localeMatcher}`)
    }
    localeMatcher = localeMatcher
  } else {
    localeMatcher = 'lookup'
  }
  switch (localeMatcher) {
    case 'lookup':
      return lookUpLocale(locale)
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
 * lookUpLocale("sr-Cyrl-BA")
 * // Returns `undefined`
 * lookUpLocale("xx-Latn")
 */
function lookUpLocale(locale) {
  if (getLocaleData(locale)) {
    return locale
  }
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  const parts = locale.split('-')
  while (locale.length > 1) {
    parts.pop()
    locale = parts.join('-')
    if (getLocaleData(locale)) {
      return locale
    }
  }
}

/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */
RelativeTimeFormat.addLocale = addLocaleData

/**
 * Sets default locale.
 * @param  {string} locale
 */
RelativeTimeFormat.setDefaultLocale = setDefaultLocale

/**
 * Gets default locale.
 * @return  {string} locale
 */
RelativeTimeFormat.getDefaultLocale = getDefaultLocale

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
// export function getLanguageFromLanguageTag(languageTag) {
//   const hyphenIndex = languageTag.indexOf('-')
//   if (hyphenIndex > 0) {
//     return languageTag.slice(0, hyphenIndex)
//   }
//   return languageTag
// }