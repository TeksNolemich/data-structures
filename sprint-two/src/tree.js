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

treeMethods.contains = function(target, node) {
  if(target === node.value) {
    return true;  
  }
  else if(node.children.length === 0) {
    return; 
  }
  else {
    for(var i = 0; i < node.children.length; i++){
      if(node.children[i].contains(target, node.children[i])){
        return true;
      } 
    }
  }
  return false;
 };