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
   public: jira-cloud.herokuapp.com,
	 port:  port
  },
	// plugins: [new HtmlWebpackPlugin({
	// 		template: './index.html'
	// 	})],
};