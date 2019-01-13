import resolveLocale from './resolveLocale'

describe('resolveLocale', () => {
  it('should resolve locale', () => {
    resolveLocale("en-XX").should.equal("en")
  })

  it('should throw when "localeMatcher" option is not a valid one', () => {
    expect(() => resolveLocale("en", { localeMatcher: "eccentric" })).to.throw('Invalid "localeMatcher" option')
  })

  it('should fall back to "lookup" when passed "best fit" "localeMatcher" option', () => {
    resolveLocale("en-XX", { localeMatcher: "best fit" }).should.equal("en")
  })
})