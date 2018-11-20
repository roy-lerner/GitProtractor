//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

/***
 * If the web page is all!! written in Angular no need to deal with sync 
 * Because protractor "knows" that it need to wait to the object
 * But if the web page is not in angular or it hibrid we should implement sync mechanism 
 */

describe('Exersise of all locatores', function() {
	
	//this function grab all phone items from the page and add the item to the chart by the given text.
	//by comparing the phone text to desired phone to add.
	
	function addItems(text){
		element.all(by.tagName("app-card")).each(function(phoneItem) {
	    //check the phone text in the phone card.
		phoneItem.element(by.css("h4 a")).getText().then(function(phoneText) {
		    if(phoneText == text)
		    {
			 //click on item's "add" button and add it to the chart
			 phoneItem.element(by.css("button[class*='btn-info']")).click();
            }  
		 })
	   })	
	}//function
	
	
	it('Locatires Test', function() {
		
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		//maximize the tested web page. 
		browser.driver.manage().window().maximize();
		
		
		element(by.name("name")).sendKeys("tester"); //name
		element(by.css("input[name='email']")).sendKeys("tester@gmail.com"); //email
		element(by.id("exampleInputPassword1")).sendKeys("password1"); //password
		element(by.id("exampleCheck1")).click(); //checkbox
		//Special locator grab all "option" elements (Male and Female) and select the element in the give text here is "Female" 
		element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female")).click().then(function() {
			browser.sleep(3000);
		})
		//click on 2nd element [0,1,2...] of Employment Status radio buttons 
		element.all(by.name("inlineRadioOptions")).get(1).click().then(function() {
			browser.sleep(3000);
		})
		//special locator can locate button due to the text which is written on it.
		element(by.buttonText("Submit")).click().then(function() {
			element(by.css("div[class*='success']")).getText().then(function(text) {
				console.log(text);
				expect(text.slice(2,text.length)).toBe("Success! The Form has been submitted successfully!.");
			})
		})
		
		//***************************
		//make some negative tests
		//***************************
		
		//clear the name textbox and insert only one char
		element(by.name("name")).clear();
		//put only one char and check that error message was changed.
		element(by.name("name")).sendKeys("M"); //put only one char this will lead to error message 
		element(by.css("[class*='alert alert-danger']")).getText().then(function(text) {
				console.log(text);
				expect(text).toBe("Name should be at least 2 characters");

	  })
	  
	  //navigate to Shop page-special locator can locate link due to the text which is written on it.
	  element(by.linkText("Shop")).click();
		
		//adding two items to chart
		addItems("iphone X");
		addItems("Samsung Note 8");
		
		//checking the chart text according to added items.
		//Checkout button is a link so we want to grab all its data by its partial text locator because we don't know in
		//Advance how many items will be added to the chart.
		element(by.partialLinkText("Checkout")).getText().then(function(checkoutText) {
			var responseArr = checkoutText.split("(");  //actual text is:  Checkout ( x ) and we split it to two parts.
			//first we remove the space in front of the number by trim() function and 
			//then we take the number which is located on index 0 (charAt(0))
			var numOfItems = responseArr[1].trim().charAt(0); 
            
			expect(numOfItems).toBe("2"); //we added two items so we need to compare it to two.
		})
		
		//move to checkout page
		element(by.partialLinkText("Checkout")).click();
		
		var sumTotal = 0;
		var total = 0;
		
		//grab the amount of all products and sum it
		element.all(by.css("tr td:nth-child(4) strong")).each(function(phonRow) {
			
			 phonRow.getText().then(function(price) { 
			 //console.log(price);
			 var responseArr = price.split(".");
			 var netPrice = responseArr[1].trim(); 	
			 
		     sumTotal+= Number(netPrice);		
		     //console.log(sumTotal);
			})
		})
		
		//get the total price appear on the bottom of the page
		element(by.css("tr td:nth-child(5) h3 strong")).getText().then(function(total) {
			  
			  var responseArr = total.split(".");
			  total = Number(responseArr[1].trim()); 	
			  //console.log(total);
			})
			
	   //compare between the total to the sum of all items's price
	   expect(sumTotal).toEqual(total);
		
	})//it
})//describe