const path = require('path');

module.exports = {
  target: 'web',
  entry: './test/openiban.test.js',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/test'),
    filename: "tests.js",
  },
  module: {
  },
  plugins: [
    // ...
    {
      apply: (compiler) => {
        compiler.plugin('done', (stats) => {
          if (stats.compilation.errors.length > 0) {
            throw new Error(stats.compilation.errors.map((err) => err.message || err));
          }
        });
      }
    }
  ]
}