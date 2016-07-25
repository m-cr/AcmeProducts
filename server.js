var express = require('express');
var path = require('path');
var swig = require('swig');
var app = express();
var routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });
app.use('/', routes);


app.use(express.static(path.join( __dirname, 'node_modules' )));

app.listen(process.env.PORT, function(){
	console.log('listening on port ', process.env.PORT);
});