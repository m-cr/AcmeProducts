var router = require('express').Router();
var Product = require('../product.model.js')

router.get('/', function(req, res, next){
	res.render('products', {title: 'AcmeProducts - Products', products: Product.getProducts()});
});

router.get('/edit/:id', function(req, res, next){
	res.render('edit', { 
    title: 'AcmeProducts - Edit Product', 
    product: Product.getProduct(req.params.id*1) })
});

router.get('/add', function(req, res, next){
	res.render('add', { title: 'AcmeProducts - Add Product'})
});

router.post('/', function(req, res, next){
	var name = req.body.name;
	Product.add(name);
	res.redirect('/products');
});

router.delete('/:id', function(req, res, next){
	Product.deleteProduct(req.params.id*1);
	res.redirect('/products');
});

router.put('/:id', function(req, res, next) {
  var name = req.body.name;
  Product.edit(req.params.id*1, name);
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
