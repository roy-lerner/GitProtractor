//describe first  parameter - suite name
//describe second parameter - function(function will contain all test -'it' blockes-)

describe('protractor first suite',function(){
	
	it('open angular browser',function(){
		browser.get('https://angularjs.org');
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
		console.log('executed after second browser: http://juliemr.github.io/protractor-demo/')	
		})
		
		})
	
	it('close angular browser',function(){
		
	})
	
})