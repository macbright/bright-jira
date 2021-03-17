const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
	// devServer: {
  //   inline:true,
  //   port: 8008
  // },
	// plugins: [new HtmlWebpackPlugin({
	// 		template: './index.html'
	// 	})],
};