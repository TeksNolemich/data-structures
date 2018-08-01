var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queue = 0;
  var queueValue;
  // Implement the methods below
  //beginning of the queue
  var valDequed = 1;
  someInstance.enqueue = function(value) {
    queue++;
    storage[valDequed] = value;
    someInstance[queue] = value;
  };

  someInstance.dequeue = function() {
    queueValue = storage[queue];
    if (queue === 1) {
      delete someInstance[queue];
      queue--;
    }

    else if (queue === 0) {
      queue = 0;
    }

    else if (queue >= 1) {
      queueValue = storage[valDequed-1];
      if(queueValue === undefined) {
        queueValue = someInstance[1];
      }
      delete someInstance[valDequed];
      queue--;
      valDequed++;
    }
    return queueValue;

  };

  someInstance.size = function() {
    return queue;
  };

  return someInstance;
};
