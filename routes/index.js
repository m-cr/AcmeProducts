var router = require('express').Router();
var Trash = require('../trash.model.js');
var methodOverride = require('method-override');
var Products = require('../product.model.js')
// var bodyparser = require('body-parser');

// var trash = Trash.getTrash();

var products = Products.getProducts();

router.use(methodOverride('_method'));

router.get('/', function(req, res, next){
	res.render('home', {title: 'AcmeProducts - Home'})
});

router.get('/products', function(req, res, next){
	res.render('products', {title: 'AcmeProducts - Products', products: products})
});

router.get('/products/edit/:id', function(req, res, next){
	res.render('edit', { title: 'AcmeProducts - Edit Product', products: Products.getAProduct(req.params.id*1) })
});

router.get('/products/add', function(req, res, next){
	res.render('add', { title: 'AcmeProducts - Add Product'})
});

router.post('/productAdd', function(req, res, next){
	var name = req.body.name;
	var id = req.body.id;
	Products.add(name, id);
	res.redirect('/products');
});

router.delete('/products/:id', function(req, res, next){
	Products.deleteProduct(req.params.id*1);
	res.redirect('/products');
});

router.post('/productUpdate/:id', function(req, res, next) {
  var name = req.body.name;
  Products.edit(req.params.id*1, name);
  res.redirect('/products');
});

// router.get('/trash', function(req, res, next){
// 	res.render('trash', {title: 'AcmeProducts - Trash', trash: trash})
// });

// router.delete('/trash/:id', function(req, res, next){
// 	Trash.deleteTrash(req.params.id*1);
// 	res.redirect('/trash');
// });

module.exports = router;