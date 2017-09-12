module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },

    browsers: ['Chrome']
  });
};