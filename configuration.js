
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['ChainOfLocatores.js'],
  //specs: ['ChainAll.js'],
  //specs: ['ChainAllPrintOp.js'],
  //specs: ['ActionsDemo.js'],
  //specs: ['AlertHandling.js'],
  //specs: ['Frames.js'],
  //specs: ['Synchronization.js'],
  //specs: ['PracticeExercise.js'],
  specs: ['CalculatorByPOM.js'],
  //will run on firefox instead of the default: chrome
  /*
  capabilities: {
	  'browserName': 'firefox'
	}*/
  /*
  capabilities: {
	  'browserName': 'internet explorer'
	}*/
  
//Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
  },
  
  suites: {
	  
	   smoke: ['AlertHandling.js','ChainAll.js'],
	   regression: 'CalculatorByPOM.js'
  }
};