var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0
  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    someInstance[counter] = value;
  };

  someInstance.pop = function() {
    //remove last added element
    var value = someInstance[counter];
    if (counter > 0) {

      delete someInstance[counter];
      counter--;
    }
    return value;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
