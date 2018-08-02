var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.counter = 0;
  obj.tracker = 1;
  return obj;
};

var queueMethods = {};

queueMethods.size = function () {
	return Object.keys(this.storage).length;
};

queueMethods.enqueue = function (value) {
	this.counter++;
	this.storage[this.counter] = value;
};

queueMethods.dequeue = function () {
	var queueValue = this.storage[this.tracker];
    delete this.storage[this.tracker];
    this.tracker++;
    return queueValue;
};
