//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

/***
 * If we want to do any action on elements inside iframe/Frame in current web page 
 * We must first navigate to this iFrame/Frame and the to perform the action otherwise the script will fail!.
 *
 */

describe('Frame Handling demo', function() {

	it('Accept and Dismiss Test', function() {
		//must!! add "browser.waitForAngularEnabled(false)" in order to finish loading the page that does not contain Angular objects 
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');
		//maximize the tested web page. 
		browser.driver.manage().window().maximize();
		
		//switch to iframe by its name.
		browser.switchTo().frame("courses-iframe");
		
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			expect(text).toBe("Login"); //check that the returned text from iframe element is equal to "Login"
		})
	})
})