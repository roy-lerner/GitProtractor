//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

describe('protractor Locators demo', function() {

	it('Test Locators', function() {
		browser.get('http://juliemr.github.io/protractor-demo/')

		element(by.model("first")).sendKeys("3");

		element(by.model("second")).sendKeys("5");
		//.then(function(){browser.sleep(5000)})

		element(by.id("gobutton")).click();
		
		//here we use chain of elements first is the father: by.repeater and second is the child under the father by.css
		//it retrieves 3 child element and in order to validate the result we take the 3th element from its child "td" td:nth-child(3) 
		//if we would want to get the second child it was td:nth-child(2)
		expect(element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()).toBe("8");
	})
})