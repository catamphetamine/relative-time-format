import { addLocaleData } from './LocaleDataStore'

describe('LocaleDataStore', () => {
  it('"addLocaleData" should throw if no locale data passed', () => {
    expect(addLocaleData).to.throw('No locale data passed')
  })
})