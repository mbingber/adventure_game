var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
};

Node.prototype.connect = function(node, str) {
	if (!connectionAlreadyExists(this.connections, str)) {
		var connection = {};
		connection[str] = node;
		this.connections.push(connection);
	}
	else {
		throw new Error();
	}
};

function connectionAlreadyExists(connections, str) {
	for (var i = 0; i < connections.length; i++) {
		if (connections[i].hasOwnProperty(str)) {
			return true;
		}
	}
	return false;
}

Node.prototype.route = function(str) {
	for (var i = 0; i < this.connections.length; i++) {
		if (this.connections[i].hasOwnProperty(str)) {
			return this.connections[i][str];
		}
	}
}

Node.prototype.getConnectionStrings = function(){
	var arr = [];
	for(var i = 0; i < this.connections.length;i++){
		arr.push(Object.keys(this.connections[i])[0]);
	}
	return arr;
}

Node.prototype.hasConnectionCondition = function(str){
	if(this.getConnectionStrings().indexOf(str) !== -1){
		return true;
	}
	else{
		return false;
	}
}


module.exports = Node;
