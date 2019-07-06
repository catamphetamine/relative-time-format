import {
  getDefaultLocale,
  setDefaultLocale,
  getLocaleData,
  addLocaleData
} from './LocaleDataStore'

import resolveLocale from './resolveLocale'
import PluralRules from './PluralRules'

// Valid time units.
export const UNITS = [
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
  "best fit"
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
    if (numeric !== undefined) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError(`Invalid "numeric" option: ${numeric}`)
      }
      this.numeric = numeric
    }

    // Set `style` option.
    if (style !== undefined) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError(`Invalid "style" option: ${style}`)
      }
      this.style = style
    }

    // Set `localeMatcher` option.
    if (localeMatcher !== undefined) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError(`Invalid "localeMatcher" option: ${localeMatcher}`)
      }
      this.localeMatcher = localeMatcher
    }

    // Set `locale`.
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
      throw new Error("No supported locale was found")
    }

    // Construct an `Intl.PluralRules` instance (polyfill).
    if (PluralRules.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new PluralRules(this.locale)
    } else {
      console.warn(`"${this.locale}" locale is not supported`)
    }

    // Use `Intl.NumberFormat` for formatting numbers (when available).
    if (typeof Intl !== 'undefined' && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale)
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem
    } else {
      this.numberingSystem = 'latn'
    }

    this.locale = resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    })
  }

  /**
   * Formats time `number` in `units` (either in past or in future).
   * @param {number} number - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */
  format() {
    const [number, unit] = parseFormatArgs(arguments)
    return this.getRule(number, unit).replace('{0}', this.formatNumber(Math.abs(number)))
  }

  /**
   * Formats time `number` in `units` (either in past or in future).
   * @param {number} number - Time interval value.
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
  formatToParts() {
    const [number, unit] = parseFormatArgs(arguments)
    const rule = this.getRule(number, unit)
    const valueIndex = rule.indexOf("{0}")
    // "yesterday"/"today"/"tomorrow".
    if (valueIndex < 0) {
      return [{
        type: "literal",
        value: rule
      }]
    }
    let parts = []
    if (valueIndex > 0) {
      parts.push({
        type: "literal",
        value: rule.slice(0, valueIndex)
      })
    }
    parts = parts.concat(
      this.formatNumberToParts(Math.abs(number))
        .map(part => ({ ...part, unit }))
    )
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
    const unitMessages = getLocaleData(this.locale)[this.style][unit]
    // Special case for "yesterday"/"today"/"tomorrow".
    if (this.numeric === "auto") {
      // "yesterday", "the day before yesterday", etc.
      if (value === -2 || value === -1) {
        const message = unitMessages[`previous${value === -1 ? '' : '-' + Math.abs(value)}`]
        if (message) {
          return message
        }
      }
      // "tomorrow", "the day after tomorrow", etc.
      else if (value === 1 || value === 2) {
        const message = unitMessages[`next${value === 1 ? '' : '-' + Math.abs(value)}`]
        if (message) {
          return message
        }
      }
      // "today"
      else if (value === 0) {
        if (unitMessages.current) {
          return unitMessages.current
        }
      }
    }
    // Choose either "past" or "future" based on time `value` sign.
    // If there's only "other" then it's being collapsed.
    // (the resulting bundle size optimization technique)
    const pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"]
    // Bundle size optimization technique.
    if (typeof pluralizedMessages === "string") {
      return pluralizedMessages
    }
    // Quantify `value`.
    // There seems to be no such locale in CLDR
    // for which "plural rules" function is missing.
    const quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || 'other'
    // "other" rule is supposed to be always present.
    // If only "other" rule is present then "rules" is not an object and is a string.
    return pluralizedMessages[quantifier] || pluralizedMessages.other
  }

  /**
   * Formats a number into a string.
   * Uses `Intl.NumberFormat` when available.
   * @param  {number} number
   * @return {string}
   */
  formatNumber(number) {
    return this.numberFormat ? this.numberFormat.format(number) : String(number)
  }

  /**
   * Formats a number into a list of parts.
   * Uses `Intl.NumberFormat` when available.
   * @param  {number} number
   * @return {object[]}
   */
  formatNumberToParts(number) {
    // `Intl.NumberFormat.formatToParts()` is not present, for example,
    // in Node.js 8.x while `Intl.NumberFormat` itself is present.
    return this.numberFormat && this.numberFormat.formatToParts ?
      this.numberFormat.formatToParts(number) :
      [{
        type: "integer",
        value: this.formatNumber(number)
      }]
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
      numeric: this.numeric,
      numberingSystem: this.numberingSystem
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
  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales]
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument')
  }
  return locales.filter(locale => resolveLocale(locale, options))
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

// The specification allows units to be in plural form.
// Convert plural to singular.
// Example: "seconds" -> "second".
const UNIT_ERROR = 'Invalid "unit" argument'
function parseUnit(unit) {
  if (typeof unit === 'symbol') {
    throw new TypeError(UNIT_ERROR)
  }
  if (typeof unit !== 'string') {
    throw new RangeError(`${UNIT_ERROR}: ${unit}`)
  }
  if (unit[unit.length - 1] === 's') {
    unit = unit.slice(0, unit.length - 1)
  }
  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError(`${UNIT_ERROR}: ${unit}`)
  }
  return unit
}

// Converts `value` to a `Number`.
// The specification allows value to be a non-number.
// For example, "-0" is supposed to be treated as `-0`.
// Also checks if `value` is a finite number.
const NUMBER_ERROR = 'Invalid "number" argument'
function parseNumber(value) {
  value = Number(value)
  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError(`${NUMBER_ERROR}: ${value}`)
    }
  }
  return value
}

/**
 * Tells `0` from `-0`.
 * https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
 * @param  {number} number
 * @return {Boolean}
 * @example
 * isNegativeZero(0); // false
 * isNegativeZero(-0); // true
 */
function isNegativeZero(number) {
  return 1 / number === -Infinity
}

function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number)
}

function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError(`"unit" argument is required`)
  }
  return [
    parseNumber(args[0]),
    parseUnit(args[1])
  ]
}