import { addLocaleData } from './LocaleDataStore.js'

describe('LocaleDataStore', () => {
  it('"addLocaleData" should throw if no locale data passed', () => {
    expect(addLocaleData).to.throw('No locale data passed')
  })
})