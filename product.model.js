var products = [
	{
		name: 'Shoe',
		id: 1
	},
	{
		name:'Jacket',
		id: 2
	},
	{
		name: 'Pants',
		id: 3
	}
]

module.exports = {
	getProducts: function(){return products;},
	getAProduct: function(id){
		var theProduct = this.getProducts().filter(function(product){
			return product.id === id;
		});
		console.log(theProduct);
		return theProduct;
	},
	deleteProduct: function(id){
		var productToDelete = this.getProducts().filter(function(product){
			return product.id === id;
		})[0];
		var idx = this.getProducts().indexOf(productToDelete);
		this.getProducts().splice(idx, 1);
	},
	edit: function(id, name){
		var theProduct = this.getProducts().filter(function(product){
			return product.id === id;
		});
		theProduct[0].name = name;
	},
	add: function(name, id){
		products.push({ name: name, id: id });
	}
}