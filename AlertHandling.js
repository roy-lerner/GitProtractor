//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

/***
 * In general pure Angular web page will not contain alerts this will happen only in
 * Hibrid or pure html web pages that will call java code to show these alerts.
 * 
 */

describe('Alert Handling demo', function() {

	it('Accept and Dismiss Test', function() {
		//must!! add "browser.waitForAngularEnabled(false)" in order to finish loading the page that does not contain Angular objects 
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');
		
		element(by.id("confirmbtn")).click();
		
		browser.switchTo().alert().accept().then(function() {
			browser.sleep(3000);
			console.log("Pressed on OK button")
		})
		
		element(by.id("confirmbtn")).click();
		
		browser.switchTo().alert().dismiss().then(function() {
			browser.sleep(3000);
			console.log("Pressed on Cancel button")
		})
		
	})
})