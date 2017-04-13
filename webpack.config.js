
const path = require('path');

const appFolder = path.resolve(__dirname, 'js');

const config = {

  entry: './js/index.js',

  resolve: {
    modules: [
      appFolder,
      'node_modules',
    ]
  },

  module: {
    rules: []
  },

  plugins: [],

  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'emoji-picker.js'
  }

};

module.exports = config;
