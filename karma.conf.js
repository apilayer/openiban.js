module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      'src/**/*.ts': ['webpack'],
      'test/**/*.js': ['webpack']
    },

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },

    browsers: ['ChromeHeadless'],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--disable-gpu',
          '--headless',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ],
      },
    }
  });
};