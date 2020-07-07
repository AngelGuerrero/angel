const path = require('path');

module.exports = {
  mode: process.env.ENVIROMENT || "development",

  entry: './src/main.js',
  output: {
    // path: path.resolve(__dirname, 'assets/js/'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};