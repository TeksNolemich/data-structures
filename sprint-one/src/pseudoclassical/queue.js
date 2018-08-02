var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.tracker = 1;
};

Queue.prototype.size = function () {
	return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
	this.counter++;
	this.storage[this.counter] = value;
}

Queue.prototype.dequeue = function () {
	var queueValue = this.storage[this.tracker];
    delete this.storage[this.tracker];
    this.tracker++;
    return queueValue;
}


