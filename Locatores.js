//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

describe('protractor Locators demo', function() {

	it('Test Locators', function() {
		browser.get('http://juliemr.github.io/protractor-demo/')

		element(by.model("first")).sendKeys("3");

		element(by.model("second")).sendKeys("5");
		//.then(function(){browser.sleep(5000)})

		element(by.id("gobutton")).click();
		
		//must resolve the output by then() because protractor does not wait until promise is resolved
		/*element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		});*/
		
		//Jasmine assertions takes care of promise resolved so we don't need to add the .then() after getText()
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8")
	})
})