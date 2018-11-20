//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

/***
 * If the web page is all!! written in Angular no need to deal with sync 
 * Because protractor "knows" that it need to wait to the object
 * But if the web page is not in angular or it hibrid we should implement sync mechanism 
 */

describe('Synchronization demo', function() {

	it('Non Angular with sync Test', function() {
		//must!! add "browser.waitForAngularEnabled(false)" in order to finish loading the page that does not contain Angular objects 
		browser.waitForAngularEnabled(false);
		browser.get('http://itgeared.com/demo/1506-ajax-loading.html');
		//maximize the tested web page. 
		browser.driver.manage().window().maximize();
		element(by.css("a[href*='javascript']")).click();
		
		var EC =  protractor.ExpectedConditions;
		
		// Waits for the element with id 'loader' to be no longer visible on the dom.
		//in this case its the spiner which turns and we should wait until it will finish
		//here we put max 5000 ms for waiting but if the element is invisible before that it will 
		//continue to run the code.
		//output should be:"Process completed! This response has been loaded via the Ajax request directly from the web server, without reoading this page."

		browser.wait(EC.invisibilityOf(element(by.id("loader"))),5000);
		
		element(by.id("results")).getText().then(function(text){
			console.log(text);
		})
	})
})