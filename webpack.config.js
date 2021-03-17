const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
	mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
	devServer: {
	 port: port,
  },
	// plugins: [new HtmlWebpackPlugin({
	// 		template: './index.html'
	// 	})],
};