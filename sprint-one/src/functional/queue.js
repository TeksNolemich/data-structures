var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var qKey = 0;
  // Implement the methods below
  //beginning of the queue
  var tracker = 1;
  someInstance.enqueue = function(value) {
    qKey++;
    storage[qKey] = value;
  };

  someInstance.dequeue = function() {
    var queueValue = storage[tracker];
    delete storage[tracker];
    tracker++;
    return queueValue;
  };

  someInstance.size = function() {
    var s = Object.keys(storage).length;
    return s;
  };

  return someInstance;
};
