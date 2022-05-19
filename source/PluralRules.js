// Importing `PluralRule` polyfill from a separate package
// results in a bundle that is larger by 1kB for some reason.
// export { default as default } from 'intl-plural-rules-polyfill/cardinal'

import PluralRuleFunctions from "./PluralRuleFunctions.js"
import getPluralRulesLocale from "./getPluralRulesLocale.js"

/**
 * `Intl.PluralRules` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
 */
export default class PluralRules {
	constructor(locale, options) {
		const locales = PluralRules.supportedLocalesOf(locale)
		if (locales.length === 0) {
			throw new RangeError("Unsupported locale: " + locale)
		}
		if (options && options.type !== "cardinal") {
			throw new RangeError("Only \"cardinal\" \"type\" is supported")
		}
		this.$ = PluralRuleFunctions[getPluralRulesLocale(locales[0])]
	}
	select(number) {
		return this.$(number)
	}
	static supportedLocalesOf(locales) {
		if (typeof locales === "string") {
			locales = [locales]
		}
		return locales.filter(locale => PluralRuleFunctions[getPluralRulesLocale(locale)])
	}
}