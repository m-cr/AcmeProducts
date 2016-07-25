var trash = [
	{
		name: 'Shoe',
		id: 1
	},
	{
		name:'Jacket',
		id: 2
	}
]

module.exports = {
	getTrash: function(){return trash;},
	deleteTrash: function(id){
		var trashToDelete = this.getTrash().filter(function(piece){
			piece.id === id;
		})[0];
		var idx = this.getTrash().indexOf(trashToDelete);
		this.getTrash().splice(idx, 1);
	}
}