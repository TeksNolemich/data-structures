

// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.graphArr = [];
  this.nodeConnection = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.value = node;
  this.nodeConnection[node] = [];
  this.graphArr.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.graphArr.includes(node);
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.graphArr = _.filter(this.graphArr, function(element) {
    return element !== node;
  });
  //loop over nodeConnection
  for(var prop in this.nodeConnection){
    //filter property value
    this.nodeConnection[prop] = _.filter(Object.values(prop), function(element) {
      return element !== node;
    })
  }
  delete this.nodeConnection[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var nodeArr = this.nodeConnection[fromNode];
  if(nodeArr.length === 0){
    return false;
  } 
  for(var i = 0; i < nodeArr.length; i++){
    if(nodeArr[i] === toNode){
      return true;
    }
  } return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeConnection[fromNode].push(toNode);
  this.nodeConnection[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
var fromNodeArr = this.nodeConnection[fromNode];
var toNodeArr = this.nodeConnection[toNode];
for(var i = 0; i < fromNodeArr.length; i++){
    if(fromNodeArr[i] === toNode){
   this.nodeConnection[fromNode] = _.filter(fromNodeArr, function(element){
     return element !== toNode;
   });
  this.nodeConnection[toNode] = _.filter(toNodeArr, function(element){
    return element !== fromNode;
  })
   return;
  }

}

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over graphArr via _.each
  _.each(this.graphArr, function(element){
    cb(element);
  });
   //pass each node to cb
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


