var Tree = function(value) {
  var newTree = {};
  // var storage = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  
  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  // debugger;
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //if node.children array is empty
    //return false
  //otherwise
    //check if node.value is equal to target
      //return true
    //otherwise
      //create node variable
      //while node.children array is not equal to 0
        //if the node value is equal to target
          //return true
        //set node variable to next node object in the children array
        
  //return false
      //call contains function on (target, ) 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */