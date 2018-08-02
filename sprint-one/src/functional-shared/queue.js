var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.allCount = 1;
  someInstance.counter = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function () {
	return Object.keys(this.storage).length;
}

queueMethods.enqueue = function (value) {
	this.counter++;
	this.storage[this.counter] = value;
}

queueMethods.dequeue = function () {
	var queueValue = this.storage[this.allCount];
    delete this.storage[this.allCount];
    this.allCount++;
    return queueValue;
}
