module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'dist/openiban.browser.js',
      'test/index.js'
    ],

    preprocessors: {
      'test/index.js': ['webpack']
    },

    webpack: require('./webpack.test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },

    browsers: ['ChromeHeadless'],

    ChromeHeadless: {
      base: 'Chrome',
      flags: [
        '--disable-gpu',
        '--headless',
        '--no-sandbox',
        '--remote-debugging-port=9222',
      ],
    },
  });
};