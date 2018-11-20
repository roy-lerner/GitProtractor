//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)
//each it block represents the test case

describe('protractor Actions demo', function() {
   
	it('Open posse website', function() {
		
		browser.get('http://posse.com')
		
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform(); //must put the perform() in the end 
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			  
			  browser.sleep(3000);
			  
			  //count how many pictures/items in search result page (2nd) after that setting the value to result1 
			  element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count().then(function(result1){
				  //grab the value that is written on the bottom of the result page in this case "7 places found" take the "7" and put it in result2
				  element(by.css("span[ng-bind*='searchResults.length']")).getText().then(function(result2){
		    		  expect(result1).toEqual(parseInt(result2)); //compare between result1 and result2 result2 is a String so we need to convert it to integer.
	    	  })  
		    })
		    
		    element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
		    	browser.sleep(3000);
		    })
		    
		    //by default print the parent window meaning the title in: http://posse.com
		    browser.getTitle().then(function(title){
		    	console.log("Parent window's title is " + title);
		    })
		    //in order to get the handle to all children windows we need to grab them to array(handles) from index 1 
		    //index 0 saved for parent window and all its children start from 1 
		    browser.getAllWindowHandles().then(function(handles){
		        browser.switchTo().window(handles[1]);
		        browser.getTitle().then(function(title){
		        console.log("Child window's title  is " + title)	
		      })
		    })
	      })
	    })
     })