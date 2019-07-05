import resolveLocale from './resolveLocale'
import { addLocaleData, getLocaleData } from './LocaleDataStore'

describe('resolveLocale', () => {
  it('should resolve locale', () => {
    // console.log()
    resolveLocale("EN").should.equal("en")
    resolveLocale("en-XX").should.equal("en")
    resolveLocale("ar-AE-oed").should.equal("ar-AE")
  })

  it('should throw when "localeMatcher" option is not a valid one', () => {
    expect(() => resolveLocale("en", { localeMatcher: "eccentric" })).to.throw('Invalid "localeMatcher" option')
  })

  it('should fall back to "lookup" when passed "best fit" "localeMatcher" option', () => {
    resolveLocale("en-XX", { localeMatcher: "best fit" }).should.equal("en")
  })
})