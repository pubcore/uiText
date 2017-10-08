import {expect} from 'chai'
import FakeXMLHTTPRequests from 'fakexmlhttprequest'
import uiText, {initLogMissingTextkey} from './uiText'
import {isMissingTextkey} from './logMissingTextkey'

const T = {
	foo: 'bar'
}

var requests = []
global.XMLHttpRequest = function () {
	var r = new FakeXMLHTTPRequests(arguments)
	requests.push(r)
	return r
}

describe('uiText, ' + new Date(), () => {
	beforeEach(() => {
		requests = []
	})

	it('logs text-keys which did not exist', () => {
		uiText(T, 'thisKeyDoesNotExist')
		expect(isMissingTextkey('thisKeyDoesNotExist')).to.be.true
	})
	it('returns text of type string', () => {
		expect(uiText({k: ''}, 'k')).to.equal('')
		expect(uiText({k: 1}, 'k')).to.equal('1')
		expect(uiText({k: 0}, 'k')).to.equal('0')
		expect(uiText({k: null}, 'k')).to.equal('null')
	})
	it('returns text with replaced replacements', () => {
		expect(uiText({k: 'Text with replacement {count}.'}, 'k', {count: 5})).to.equal('Text with replacement 5.')
	})
	it('must return given default text, if text is undefined', () => {
		expect(uiText({}, 'k', 'a default text')).to.equal('a default text')
	})
	it('must return given default text with replaced replacement', () => {
		expect(uiText({}, 'k', 'a default text with replacement {count}.', {count: 123})).to.match(/123/)
	})
	it('must return text with replaced replacements, in spite of given default text', () => {
		expect(uiText({k: 'a text with replacement {count}.'}, 'k', 'a default text {count}', {count: 5})).to.equal('a text with replacement 5.')
	})

	it('http post missing textkey data, if corresponding uri is given', () => {
		initLogMissingTextkey({postUri: 'https://xyz.com/', timeout: 0})
		uiText({}, 'aKey', 'a default text {count}', {count: 5})
		expect(requests.length).to.equal(1)
		expect(JSON.parse(requests[0].requestBody).aKey).to.equal('a default text {count} {"count":5}')
	})
})
