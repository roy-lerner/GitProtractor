/**
 * This POM file is used for CalculatorByPOM file
 * It gives the Base URL and page elements.
 * 
 * 1. We first define the contractor function.
 * 2. We create an object from that constructor
 * 3. We export this object to be used in other files by "modul.exports" function
 * 4. Then this object can be used by other files if they define the "require" function.
 */


function PageElements(){
	
	this.firstElement  = element(by.model("first"));
	this.secondElement = element(by.model("second"));
	this.goButton      = element(by.id("gobutton"));
	
	this.getBaseURL        = function(){
		browser.get('http://juliemr.github.io/protractor-demo/')
	}
}

module.exports = new PageElements();


