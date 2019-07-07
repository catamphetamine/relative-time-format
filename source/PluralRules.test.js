import PluralRules from './PluralRules'

describe('Intl.PluralRules', () => {
	it('should validate "locales" argument', () => {
		expect(() => new PluralRules('xx')).to.throw('Unsupported locale')
	})

	it('should validate "locale" format', () => {
		expect(() => new PluralRules('-en')).to.throw('Invalid locale')
	})

	it('should validate "type" option', () => {
		expect(() => new PluralRules('en', { type: 'ordinal' })).to.throw('Only "cardinal" "type" is supported')
	})

	it('should quantify numbers', () => {
		expect(new PluralRules('en').select(0)).to.equal('other')
		expect(new PluralRules('en').select(1)).to.equal('one')
	})

	it('should use supported locales', () => {
		expect(new PluralRules('en-US-POSIX').select(0)).to.equal('other')
		expect(new PluralRules('en-US-POSIX').select(1)).to.equal('one')
	})

	it('should return supported locales of', () => {
		expect(PluralRules.supportedLocalesOf('ru-RU-Cyrl')).to.deep.equal(['ru-RU-Cyrl'])
		expect(PluralRules.supportedLocalesOf(['ru-RU-Cyrl'])).to.deep.equal(['ru-RU-Cyrl'])
	})
})