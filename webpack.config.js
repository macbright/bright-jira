const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
	devServer: {
    host:'0.0.0.0',
    port: 5000,
		publicPath: '/dist'
  },
	// plugins: [new HtmlWebpackPlugin({
	// 		template: './index.html'
	// 	})],
};