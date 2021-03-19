const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

module.exports = {
	mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
	devServer: {
	 compress: true,
	 port:  port,
	 disableHostCheck: true,

	//   allowedHosts: [
  //     '.amazonaws.com',  'jira-cloud.herokuapp.com', '.herokuapp.com',
			
  // ],
	 
  },
	// plugins: [new HtmlWebpackPlugin({
	// 		template: './index.html'
	// 	})],
};