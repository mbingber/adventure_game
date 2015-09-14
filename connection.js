var Connection = function(nextNode, condition) {
	this.nextNode = nextNode;
	this.condition = condition;
};

Connection.prototype.test = function(str){
	if((this.condition !== str) && (this.condition !== undefined)){
		return false;
	}
	else{
		return true;
	}
}

module.exports = Connection;
