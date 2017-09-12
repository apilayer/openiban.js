const path  = require('path');
const merge = require('webpack-merge');

var baseConfig = {
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    libraryExport: 'default',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}

var serverConfig = {
  target: 'node',
  entry: {
    'openiban.node': './src/main.ts',
  },
  resolve: {
    alias: {
      'openiban_http': './http.ts'
    }
  }
};

var clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  entry: {
    'openiban.browser': './src/main.ts',
  },
  resolve: {
    alias: {
      'openiban_http': './http.browser.ts'
    }
  }
};

module.exports = [
  merge(baseConfig, serverConfig),
  merge(baseConfig, clientConfig)
];
