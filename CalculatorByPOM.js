//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)


/***
 * We define "pageElemnt" object in POM.js and export this object to 
 * This file variable (obj) by using require("./POM.js") function.
 * Then in the script we can use "pageElemnt" properties by just putting "."
 * after the
 * 
 */

describe('Calculator Testing', function() {

	var obj   = require("./POM.js");
	var using = require('jasmine-data-provider');
	
	var actual ="";

	
	//get the dataset from DataSet.js file
    var data  = require("./DataSet.js");
    
	//run before each test case e.g. ("it" block)
	beforeEach(function() {
		console.log("before test run!");
		
		//open the web site to be tested.
	    obj.getBaseURL(); 
	  });
	
	
 using(data.dataDriven,function(set,setDescription){	
	it('Smoke Test ' + setDescription, function() {

		obj.firstElement.sendKeys(set.a);

		obj.secondElement.sendKeys(set.b);
	
		obj.goButton.click();
		
		actual = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
			
		//here we use chain of elements first is the father: by.repeater and second is the child under the father by.css
		//it retrieves 3 child element and in order to validate the result we take the 3th element from its child "td" td:nth-child(3) 
		//if we would want to get the second child it was td:nth-child(2)
		expect(actual).toBe(set.expected);
	})//it
 }) //using
 
	//run after each test case e.g. ("it" block)
	afterEach(function() {
	    console.log("after test run!");   
	  });

})