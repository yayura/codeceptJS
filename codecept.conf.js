exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
      // ,
    //   desiredCapabilities: {
    //     chromeOptions: {
    //       args: [ '--headless', '--disable-gpu', '--no-sandbox' ]
    //     }
    // }
  }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'simple',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {},
    testrail: {
      require: 'codeceptjs-testrail',
      host: 'https://sftws.testrail.io',
      user: 'adsyayura@gmail.com',
      password: 'Zxc45648*',
      suiteId: 11,
      projectId: 7,
      enabled: true
    }  
  }
}
