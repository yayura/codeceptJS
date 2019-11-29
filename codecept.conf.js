exports.config = {
  tests: './tests/*_test.js',
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
  include: {
    pubLogin: './pages/pubLogin.js',
  },
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
      host: 'https://softwise.testrail.io/',
      user: 'y.yakovlev@adsterratech.com',
      password: 'Zxc45648*',
      suiteId: 1,
      projectId: 1,
      enabled: true
    }  
  }
}
