//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

describe('protractor Locators demo', function() {
    
	/***********************************************************************
	 * We implemented one main function Calculator that takes also the operator
	 * Name as it appears in DOM for each function calling we grab all "option"tag results
	 * And we check each option result if it matches to the operator sent to the function
	 * When there is a match we click on that element but the loop will continue until the option elements
	 * Will be finished.
	 * After that we click on "go" button and print the results of all methods calling
	 */
	
	function Calculator(a,b,operator){
		
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item) {
		   
			item.getAttribute("value").then(function(op) 
			{
			  if (op == operator){
				  item.click(); //clicking on operator from the drop down: *,-,+,/
			  }
			  else{
				  console.log(op);
			  }
				  
			})
	  })
	  
	   element(by.id("gobutton")).click();
	}
	
	it('Test Locators', function() {
		browser.get('http://juliemr.github.io/protractor-demo/')
		
        Calculator(3,3,"ADDITION");
		Calculator(7,5,"ADDITION");
		Calculator(-5,3,"DIVISION");
		Calculator(-1,-9,"MULTIPLICATION");
		Calculator(9,3,"DIVISION");
		Calculator(8,-13,"SUBTRACTION");
	    
		/***********************************************************************
		 * In order to take all results of We use here the all() function which
		 * takes all appearance of "result in memory" elements Now we need to
		 * use the each() function which iterates throw all "result in memory"
		 * elements And for each appearance we grab the result "td:nth-child(3)"
		 * which is the result of add() function and print it Here the print is
		 * from the end to beginning.
		 */
		
		element.all(by.repeater("result in memory")).each(function(rowOfResultInTable){
			
		rowOfResultInTable.element(by.css("td:nth-child(3)")).getText().then(function(result)
	    {
	      console.log(result);
	    })
	  })
   })
})