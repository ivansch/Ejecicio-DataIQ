var express = require('express');
var app = express();

app.get('/personas', function(req, res, next) {
	res.json([ 'Hola mundo' ]);
});

app.listen(3000, function(err) {
	console.log('Server lestening on port 3000')
});
  
