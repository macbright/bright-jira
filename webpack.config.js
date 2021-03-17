const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

var express = require('express');

var app = express();


// app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8001);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

module.exports = {
	mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
	devServer: {
   disableHostCheck: true,
  },
	// plugins: [new HtmlWebpackPlugin({
	// 		template: './index.html'
	// 	})],
};