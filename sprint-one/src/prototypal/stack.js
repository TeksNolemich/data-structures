var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.counter = 0;
  // obj.tracker = 0;

  return obj;
};

// Stack.prototype = {};
var stackMethods = {};

stackMethods.size = function () {
	// return Object.keys(this.storage).length;
	return this.counter;
};

stackMethods.push = function (value) {
	this.counter++;
	// this.tracker++;
	this.storage[this.counter] = value;
};

stackMethods.pop = function () {
	var keep = this.storage[this.counter];
	delete this.storage[this.counter];
	this.counter--;
	if (this.counter < 0) {
		this.counter = 0;
	}
	return keep;
};



