

var HashTable = function() {
  this._limit = 8;

  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indyTuple = [k,v];
  var bucket = this._storage[index];
  //check if bucket exists
  if (bucket === undefined) {
    //if bucket doesn't exists, create empty bucket
    this._storage[index] = [];
    bucket = this._storage[index];
  }
  if (bucket){
    //insert bucket into storage
    bucket.push(indyTuple);
  }
  //if bucket does exist, set bucket equal to storage[index]
  //create tuple in bucket with length 2
    //push k and v in tuple to bucket
  
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage[index];
  var returnVal;
  if (searchArr) {
    _.each(searchArr, function(element) {
      if (element[0] === k) {
        returnVal = element[1]; 
      }
    });
  }
  return returnVal;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage[index];
  if (searchArr) {
    this._storage[index] = _.filter(searchArr, function(element) {
      if (k !== element[0]) {
        return element;
      }
    });
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


