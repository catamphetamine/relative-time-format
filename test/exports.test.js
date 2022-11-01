import RelativeTimeFormat from '../index.js'
import Library from '../index.cjs'

import en from '../locale/en.json' assert { type: 'json' }

RelativeTimeFormat.addLocale(en)

describe(`exports`, () => {
	it(`should export ES6`, () => {
		new RelativeTimeFormat('en').format(1, 'day').should.be.a('string')
	})

	it(`should export CommonJS`, () => {
		Library.default.addLocale(en)
		new Library.default('en').format(1, 'day').should.be.a('string')
	})
})