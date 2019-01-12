import RelativeTimeFormat from '../index'
import en from '../locale/en'

RelativeTimeFormat.addLocale(en)

describe(`exports`, () => {
	it(`should export ES6`, () => {
		new RelativeTimeFormat('en').format(1, 'day').should.be.a('string')
	})

	it(`should export CommonJS`, () => {
		const Library = require('../index.commonjs')
		Library.default.addLocale(en)
		new Library.default('en').format(1, 'day').should.be.a('string')
	})
})