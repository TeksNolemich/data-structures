var Set = function() {
  var set = Object.create(setPrototype);
  counter = 0;
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[this.counter] = item;
  this.counter++;
};

setPrototype.contains = function(item) {
  for (var prop in this._storage) {
    if(this._storage[prop] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var prop in this._storage) {
    if(this._storage[prop] === item){
      delete this._storage[prop];
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
