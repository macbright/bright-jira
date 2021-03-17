var path = require('path');
var express = require('express');

var app = express();




app.get(express.static(path.join()));
app.set('port', process.env.PORT || 8800);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

