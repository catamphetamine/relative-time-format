import ccp from '../locale/ccp.json'
import de from '../locale/de.json'
import en from '../locale/en.json'
import ru from '../locale/ru.json'
import to from '../locale/to.json'
import ar_AE from '../locale/ar-AE.json'
import pt from '../locale/pt.json'
import pt_PT from '../locale/pt-PT.json'

import RelativeTimeFormat from './RelativeTimeFormat'

RelativeTimeFormat.addLocale(ccp)
RelativeTimeFormat.addLocale(de)
RelativeTimeFormat.addLocale(en)
RelativeTimeFormat.addLocale(ru)
RelativeTimeFormat.addLocale(to)
RelativeTimeFormat.addLocale(ar_AE)
RelativeTimeFormat.addLocale(pt)
RelativeTimeFormat.addLocale(pt_PT)

// Just so this function code is covered.
RelativeTimeFormat.setDefaultLocale('en')

describe('Intl.RelativeTimeFormat', () => {
  it('should validate options', () => {
    expect(() => new RelativeTimeFormat("en", { style: "postmodern" })).to.throw("Invalid \"style\" option")
    expect(() => new RelativeTimeFormat("en", { numeric: "sometimes" })).to.throw("Invalid \"numeric\" option")
  })

  it('should fall back to default locale', () => {
    const rtf = new RelativeTimeFormat()
    expect(rtf.format(-1, "day")).to.equal("1 day ago")
  })

  it('should throw when "numeric" option is not a valid one', () => {
    expect(() => new RelativeTimeFormat("en", { numeric: "sometimes" })).to.throw('Invalid "numeric" option')
  })

  it('should require "unit" argument', () => {
    const rtf = new RelativeTimeFormat()
    expect(() => rtf.format(-1)).to.throw('"unit" argument is required')
  })

  it('should use the passed "style" option', () => {
    const rtf = new RelativeTimeFormat("en", { style: "short" })
    expect(rtf.format(-1, "year")).to.equal("1 yr. ago")
  })

  it('should throw when "style" option is not a valid one', () => {
    expect(() => new RelativeTimeFormat("en", { style: "postmodern" })).to.throw('Invalid "style" option')
  })

  it('should use the passed "localeMatcher" option', () => {
    const rtf = new RelativeTimeFormat("en-XX", { localeMatcher: "lookup" })
    expect(rtf.format(-1, "day")).to.equal("1 day ago")
  })

  it('should throw when "localeMatcher" option is not a valid one', () => {
    expect(() => new RelativeTimeFormat("en", { localeMatcher: "eccentric" })).to.throw('Invalid "localeMatcher" option')
  })

  it('should throw if no supported locale was found', () => {
    RelativeTimeFormat.setDefaultLocale('xx')
    expect(() => new RelativeTimeFormat()).to.throw("No supported locale was found")
    RelativeTimeFormat.setDefaultLocale('en')
  })

  it('should format relative time', () => {
    const rtf = new RelativeTimeFormat("en")

    expect(rtf.format(-1, "day")).to.equal("1 day ago")
    expect(rtf.format(-2, "day")).to.equal("2 days ago")
    expect(rtf.format(2.15, "day")).to.equal("in 2.15 days")
    expect(rtf.format(100, "day")).to.equal("in 100 days")
  })

  it('should throw for non-finite numbers', () => {
    const rtf = new RelativeTimeFormat("en")
    expect(() => rtf.format(-Infinity, "day")).to.throw("Invalid number")
  })

  it('should fall back to "other" quantifier if others have been removed as an optimization', () => {
    const rtf = new RelativeTimeFormat("ru")
    // `2` is classified as "few" in Russian.
    // The rule for "few" is identical to that for "other"
    // so the rule for "few" is omitted from locale data
    // to reduce bundle size.
    expect(rtf.format(-2, "day")).to.equal("2 дня назад")
  })

  it('should throw if a time unit is unsupported', () => {
    const rtf = new RelativeTimeFormat("en")
    expect(() => rtf.format(-1, "decade")).to.throw("Unknown time unit: decade")
  })

  it('should format yesterday/today/tomorrow', () => {
    const rtf = new RelativeTimeFormat("de", { numeric: "auto" })

    // "today" is useless for relative time labels.
    // E.g. for `23:59:00` "today" is too vague.
    // And for `00:01:00` "today" is counter-intuitive.
    // "yesterday" and "tomorrow" are also useless for relative time.
    // E.g. "yesterday" of `00:01` is misleading.
    // Same as "tomorrow" of `23:59` which is misleading too.
    // Not to mention that both of them are too "vague", same as "today".
    // Also there are no rules defining when to use
    // "yesterday", "today" and "tomorrow".
    // The algorithm should take local time into account.

    expect(rtf.format(-2, "day")).to.equal("vorgestern")
    expect(rtf.format(-1, "day")).to.equal("gestern")
    expect(rtf.format(0, "day")).to.equal("heute")
    expect(rtf.format(1, "day")).to.equal("morgen")
    expect(rtf.format(2, "day")).to.equal("übermorgen")

    expect(rtf.format(0, "second")).to.equal("jetzt")
  })

  it('should use "Intl.NumberFormat" (when available)', () => {
    const rtf = new RelativeTimeFormat("en")
    expect(rtf.format(1000, "day")).to.equal("in 1,000 days")
  })

  it('should fall back when "Intl.NumberFormat" is not available', () => {
    const NumberFormat = Intl.NumberFormat
    // I imagine `Intl` object getting "frozen" in future.
    delete Intl.NumberFormat
    const rtf = new RelativeTimeFormat("en")
    expect(rtf.format(1000, "day")).to.equal("in 1000 days")
    Intl.NumberFormat = NumberFormat
  })

  it('shouldn\'t format yesterday/today/tomorrow when there\'s no locale data', () => {
    const enLongDay = { ...en.long.day }
    delete en.long.day.previous
    delete en.long.day.current
    delete en.long.day.next

    const rtf = new RelativeTimeFormat("en", { numeric: "auto" })

    // "today" is useless for relative time labels.
    // E.g. for `23:59:00` "today" is too vague.
    // And for `00:01:00` "today" is counter-intuitive.
    // "yesterday" and "tomorrow" are also useless for relative time.
    // E.g. "yesterday" of `00:01` is misleading.
    // Same as "tomorrow" of `23:59` which is misleading too.
    // Not to mention that both of them are too "vague", same as "today".
    // Also there are no rules defining when to use
    // "yesterday", "today" and "tomorrow".
    // The algorithm should take local time into account.

    expect(rtf.format(-1, "day")).to.equal("1 day ago")
    expect(rtf.format(0, "day")).to.equal("in 0 days")
    expect(rtf.format(1, "day")).to.equal("in 1 day")

    en.long.day = enLongDay
  })

  it('should accept an array of locales', () => {
    const rtf = new RelativeTimeFormat(["en"])
    expect(rtf.format(-2, "day")).to.equal("2 days ago")
  })

  it('should resolve locales as "best fit"', () => {
    const rtf = new RelativeTimeFormat('en-XX')
    expect(rtf.format(-2, "day")).to.equal("2 days ago")
  })

  it('should fallback to default system locale', () => {
    const rtf = new RelativeTimeFormat()
    expect(rtf.format(-2, "day")).to.equal("2 days ago")
  })

  it('should support plural units', () => {
    const rtf = new RelativeTimeFormat()
    expect(rtf.format(-2, "days")).to.equal("2 days ago")
  })

  it('should support negative zero', () => {
    const rtf = new RelativeTimeFormat()
    expect(rtf.format(0, "day")).to.equal("in 0 days")
    expect(rtf.format(-0, "day")).to.equal("0 days ago")
    expect(rtf.formatToParts(-0, "second")).to.deep.equal([
      { type: "integer", value: "0", unit: "second" },
      { type: "literal", value: " seconds ago" }
    ])
  })

  it('should support string numbers', () => {
    const rtf = new RelativeTimeFormat()
    expect(rtf.format("0", "day")).to.equal("in 0 days")
  })

  it('should format to parts', () => {
    let rtf = new RelativeTimeFormat("en")

    // `Intl.NumberFormat` doesn't have `formatToParts()`
    // in Node.js version 9.x.
    // In Node.js version 12.x it does have that method.
    if (Intl.NumberFormat.prototype.formatToParts) {
      expect(rtf.formatToParts(1000, "day")).to.deep.equal([
        { type: "literal", value: "in " },
        { type: "integer", value: "1", unit: "day" },
        { type: "group", value: ",", unit: "day" },
        { type: "integer", value: "000", unit: "day" },
        { type: "literal", value: " days" }
      ])
    }

    expect(rtf.formatToParts(100, "day")).to.deep.equal([
      { type: "literal", value: "in " },
      { type: "integer", value: "100", unit: "day" },
      { type: "literal", value: " days" }
    ])

    expect(rtf.formatToParts(-100, "day")).to.deep.equal([
      { type: "integer", value: "100", unit: "day" },
      { type: "literal", value: " days ago" }
    ])
  })

  it('should format to parts with numeric="auto"', () => {
    const rtf = new RelativeTimeFormat("en", { numeric: "auto" })

    expect(rtf.formatToParts(-1, "day")).to.deep.equal([
      { type: "literal", value: "yesterday" }
    ])

    expect(rtf.formatToParts(100, "day")).to.deep.equal([
      { type: "literal", value: "in " },
      { type: "integer", value: "100", unit: "day" },
      { type: "literal", value: " days" }
    ])
  })

  it('should format to parts (non-English)', () => {
    // Tonga (Tonga Islands)
    const rtf = new RelativeTimeFormat("to")
    expect(rtf.formatToParts(100, "day")).to.deep.equal([
      { type: "literal", value: "ʻi he ʻaho ʻe " },
      { type: "integer", value: "100", unit: "day" }
    ])
  })

  it('"supportedLocalesOf" should list supported locales', function() {
    expect(RelativeTimeFormat.supportedLocalesOf(['es-ES', 'ru', 'ru-XX', 'en-GB']))
      .to.deep.equal(['ru', 'ru-XX', 'en-GB'])
    expect(RelativeTimeFormat.supportedLocalesOf('ru-XX')).to.deep.equal(['ru-XX'])
  })

  it('"supportedLocalesOf" should throw when "localeMatcher" option is not a valid one', () => {
    expect(() => RelativeTimeFormat.supportedLocalesOf(["en"], { localeMatcher: "eccentric" })).to.throw('Invalid "localeMatcher" option')
  })

  it('should quantify as "other" when no quantifier function is present for a locale', () => {
    new RelativeTimeFormat("ccp").format(1, "minute").should.equal("1 𑄟𑄨𑄚𑄨𑄘𑄬")
  })

  it('should use quantify for a language of a specific locale', () => {
    // Will use `quantify` for "ar" language.
    new RelativeTimeFormat("ar-AE").format(-1, "year").should.equal("قبل سنة واحدة")
    new RelativeTimeFormat("ar-AE").format(-2, "year").should.equal("قبل سنتين")
    new RelativeTimeFormat("ar-AE").format(-3, "year").should.equal("قبل 3 سنوات")
    new RelativeTimeFormat("ar-AE").format(-1.23, "year").should.equal("قبل 1.23 سنة")
  })

  it('should use correct quantify for Portuguese ("pt") and European Portuguese ("pt-PT")', () => {
    new RelativeTimeFormat("pt").format(1.5, "day").should.equal("em 1.5 dia")
    new RelativeTimeFormat("pt-PT").format(1.5, "day").should.equal("dentro de 1.5 dias")
  })

  it('should show resolved options', function() {
    expect(new RelativeTimeFormat('ru-XX', { timeZone: 'UTC' }).resolvedOptions()).to.deep.equal({
      locale: "ru",
      style: "long",
      numeric: "always"
    })
  })
})