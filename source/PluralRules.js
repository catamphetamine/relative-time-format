import PluralRuleFunctions from "./PluralRuleFunctions"
import getPluralRulesLocale from "./getPluralRulesLocale"

/**
 * `Intl.PluralRules` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
 */
export default class PluralRules {
	constructor(locale) {
		if (PluralRules.supportedLocalesOf(locale).length === 0) {
			throw new RangeError("Unsupported locale: " + locale)
		}
		this.quantify = PluralRuleFunctions[getPluralRulesLocale(locale)]
	}
	select(number, options) {
		if (options && options.type !== "cardinal") {
			throw new RangeError("Only \"cardinal\" \"type\" is supported")
		}
		return this.quantify(number)
	}
	static supportedLocalesOf(locales) {
		if (typeof locales === "string") {
			locales = [locales]
		}
		return locales.filter(locale => PluralRuleFunctions[getPluralRulesLocale(locale)])
	}
}