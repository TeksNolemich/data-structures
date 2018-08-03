var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    var node = Node(value);
    var currentNode = list.head;
    // if currentnode.next is null
      //do nothing (both head and tail)
    if (currentNode === null) {
      list.count++;
      list.head = node;
      list.tail = node;
      currentNode = list.head;
      return list.tail;
    }    
    // if currentnode.next not null
      //currentnode becomes node
    //
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    } 
    currentNode.next = node;
    list.count++;
    list.tail = node;
    return currentNode; 
  };

  list.removeHead = function() {
    // debugger;
    var oldHead = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    //set current head to variable obj
 
    var obj = list.head;
    var counter = list.count;
    if (obj === null) {
      return false;
    }
    //if current head value matches the target
    if(obj.value === target) {
      list.count--;
      return true;
    }
      //decrement counter
      //return true
    // loop; if obj.next is not null
    // debugger;
    while(counter !== -1 ){
      if(obj === null){
        return false;
      } else if(obj.value === target){
        list.count--;
        return true;
      } 
      obj = obj.next;
      counter--; 
    } 
    return false;
     
      //if obj.value matches target
        //decrement counter
        //return true
      //set obj to obj.next
    
    //return false
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
