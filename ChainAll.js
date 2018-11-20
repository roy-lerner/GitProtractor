//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

describe('protractor Locators demo', function() {
    
	function add(a,b){
		
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);	
		element(by.id("gobutton")).click();
	}
	
	it('Test Locators', function() {
		browser.get('http://juliemr.github.io/protractor-demo/')
		
        add(3,3);
		add(7,5);
		add(-5,3);
		add(-1,-9);
		add(0,3);
		add(8,-13);
	    
		/***
		 * In order to take all results of 
		 * We use here the all() function which takes all appearance of "result in memory" elements 
		 * Now we need to use the each() function which iterates throw all "result in memory" elements
		 * And for each appearance we grab the result "td:nth-child(3)" which is the result of add() function and print it
		 * Here the print is from the end to beginning.
		 */
		
		element.all(by.repeater("result in memory")).each(function(rowOfResultInTable){
			
		rowOfResultInTable.element(by.css("td:nth-child(3)")).getText().then(function(result)
	    {
	      console.log(result);
	    })
	  })
   })
})