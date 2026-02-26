import { describe, it } from 'mocha'
import { expect } from 'chai'

import resolveLocale from './resolveLocale.js'

describe('resolveLocale', () => {
  it('should resolve locale', () => {
    expect(resolveLocale("EN")).to.equal("en")
    expect(resolveLocale("en-XX")).to.equal("en")
    expect(resolveLocale("ar-AE-oed")).to.equal("ar-AE")
  })

  it('should throw when "localeMatcher" option is not a valid one', () => {
    expect(() => resolveLocale("en", { localeMatcher: "eccentric" })).to.throw('Invalid "localeMatcher" option')
  })

  it('should fall back to "lookup" when passed "best fit" "localeMatcher" option', () => {
    expect(resolveLocale("en-XX", { localeMatcher: "best fit" })).to.equal("en")
  })
})