//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

describe('protractor Locators demo', function() {

	it('Test Locators', function() {
		//must!! add "browser.waitForAngularEnabled(false)" in order to finish loading the page that does not contain Angular objects 
		browser.waitForAngularEnabled(false);
		browser.get('http://google.com');
	})
})