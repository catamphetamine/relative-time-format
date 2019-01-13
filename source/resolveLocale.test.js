import resolveLocale from './resolveLocale'

describe('resolveLocale', () => {
  it('"resolveLocale" should resolve locale', () => {
    resolveLocale("en-XX").should.equal("en")
  })

  it('"resolveLocale" should throw when "localeMatcher" option is not a valid one', () => {
    expect(() => resolveLocale(["en"], { localeMatcher: "eccentric" })).to.throw('Invalid "localeMatcher" option')
  })
})