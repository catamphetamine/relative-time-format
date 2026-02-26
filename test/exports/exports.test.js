import { describe, it } from 'mocha'
import { expect } from 'chai'

import RelativeTimeFormat from '../../index.js'
import Library from '../../index.cjs'

import en from '../../locale/en.json' with { type: 'json' }

RelativeTimeFormat.addLocale(en)

describe(`exports`, () => {
	it(`should export ES6`, () => {
		expect(new RelativeTimeFormat('en').format(1, 'day')).to.be.a('string')
	})

	it(`should export CommonJS`, () => {
		Library.default.addLocale(en)
		expect(new Library.default('en').format(1, 'day')).to.be.a('string')
	})
})