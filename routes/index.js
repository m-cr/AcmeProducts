var router = require('express').Router();
var Trash = require('../trash.model.js').getTrash();
var methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', function(req, res, next){
	res.render('home', {title: 'AcmeProducts - Home'})
});

router.get('/products', function(req, res, next){
	res.render('products', {title: 'AcmeProducts - Products'})
});

router.get('/trash', function(req, res, next){
	res.render('trash', {title: 'AcmeProducts - Trash', trash: Trash})
});

router.delete('/trash/:id', function(req, res, next){
	// res.render('trash', {title: 'AcmeProducts - Trash', trash: Trash})
	res.redirect('/trash');
});

module.exports = router;