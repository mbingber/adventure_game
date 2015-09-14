var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
};

Game.prototype.addNode = function(title,text){
	if (this.nodes.hasOwnProperty(title)){
		throw new Error();
	}
	else{
		var node = new Node(title,text);
		this.nodes[title] = node;
		if (this.startingPoint === null){
			this.startingPoint = node;
		}
		return node;
	}
}


Game.prototype.getNode = function(title){
	if(this.nodes.hasOwnProperty(title)){
		return this.nodes[title];
	}
}

Game.prototype.connect = function(title1,title2,str){
	var node1 = this.getNode(title1);
	var node2 = this.getNode(title2);
	node1.connect(node2,str);
}

module.exports = Game;
