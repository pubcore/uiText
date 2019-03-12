import {expect} from 'chai'
import defaultTexts from './test/defaultTexts.json'
import autoupdateDefaultTextsEnabled, {initAutoupdateDefaultTexts,isAutoupdateDefaultTextsEnabled} from './autoupdateDefaultTexts'

describe('autoupdateDefaultTexts, ' + new Date(), () => {

	beforeEach(() => {
		initAutoupdateDefaultTexts({postUri: ''})
	})

	it('isAutoupdateDefaultTextsEnabled() should return false', () => {
		expect(isAutoupdateDefaultTextsEnabled()).to.be.false
	})
	it('isAutoupdateDefaultTextsEnabled() should return true', () => {
		initAutoupdateDefaultTexts({
			postUri: 'someuri',
			timeout: 3000
		})
		expect(isAutoupdateDefaultTextsEnabled()).to.be.true
		initAutoupdateDefaultTexts({postUri: ''})
	})
	// it('autoupdateDefaultTextsEnabled() should post defaultTexts data', () => {
	// 	var dt = {
	// 		...defaultTexts() ,
	// 		unittest_textkey: {
	// 			text: 'unittest {replacement}',
	// 			optional: false,
	// 			dynamic: true
	// 		}
	// 	}
	// 	return autoupdateDefaultTextsEnabled(dt).then(res => expect.equal(200, res.statusCode))
	// })
})
