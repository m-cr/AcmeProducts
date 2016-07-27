var express = require('express');
var path = require('path');
var swig = require('swig');
swig.setDefaults({ cache: false });
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
app.use(express.static(path.join( __dirname, 'node_modules' )));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next){
	res.render('home', {title: 'AcmeProducts - Home'})
});
app.use('/products', require('./routes/product-routes'));



app.listen(process.env.PORT, function(){
	console.log('listening on port ', process.env.PORT);
});
