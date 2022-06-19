const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/styles/variables.sass'),
        path.resolve(__dirname, './src/styles/mixins.sass'),
      ]
    }
  }
};