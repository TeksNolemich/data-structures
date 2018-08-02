var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {};

stackMethods.size = function() {
	return this.counter;
}

stackMethods.push = function(value) {
	this[this.counter] = value;
	this.counter++;
}

stackMethods.pop = function() {
	this.counter--;
	if (this.counter < 0) {
		this.counter = 0;
	}
	return this[this.counter];
}


