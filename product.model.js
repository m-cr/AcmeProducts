var _products = [
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
];

module.exports = {
	getProducts: function(){
    return _products;
  },
	getProduct: function(id){
		return this.getProducts().filter(function(product){
			return product.id === id;
		})[0];
	},
	deleteProduct: function(id){
		var idx = this.getProducts().indexOf(this.getProduct(id));
		this.getProducts().splice(idx, 1);
	},
	edit: function(id, name){
    this.getProduct(id).name = name;
	},
	add: function(name, id){
    var max = 0;
    max = this.getProducts().reduce(function(max, product){
      if(product.id > max)
        max = product.id;
      return max;
    }, 0);
    max++;
    var product = {
      name: name,
      id: max
    };
    this.getProducts().push(product);
	}
};
