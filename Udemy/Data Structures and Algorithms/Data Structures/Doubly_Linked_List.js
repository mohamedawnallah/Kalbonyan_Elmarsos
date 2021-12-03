class Node{
  constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}


class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(this.length === 0){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  } 
  pop(){
      if(!this.head) return undefined;
      var poppedNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
  }
  shift(){
      if(this.length === 0) return undefined;
      var oldHead = this.head;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      }else{
          this.head = oldHead.next;
          this.head.prev = null;
          oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }
  unshift(val){
      var newNode = new Node(val);
      if(this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
  get(index){
      if(index < 0 || index >= this.length) return null;
      let count, current;
      if(index <= this.length/2){
          count = 0;
          current = this.head;
          while(count !== index){
              current = current.next;
              count++;
          }
      } else {
          count = this.length - 1;
          current = this.tail;
          while(count !== index){
              current = current.prev;
              count--;
          }
      }
      return current;
  }
   
  remove(index) {
    let foundNode = this.get(index);
    if(foundNode !== null) {
     if (index === 0) {
       this.shift();
     } else if (index === this.length - 1){
       this.pop();
     } else {
       let prevNode = foundNode.prev;
       let nextNode = foundNode.next;
       prevNode.next = nextNode;
       nextNode.prev = prevNode;
       foundNode.prev = null;
       foundNode.next = null;
     }
     this.length--;
     return foundNode;
    }
    return undefined;
  }
  
  set(index, val){
      var foundNode = this.get(index);
      if(foundNode != null){
          foundNode.val = val;
          return true;
      }
      return false;
  }
  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === 0) return !!this.unshift(val);
      if(index === this.length) return !!this.push(val);

      var newNode = new Node(val);
      var beforeNode = this.get(index-1);
      var afterNode = beforeNode.next;
      
      beforeNode.next = newNode, newNode.prev = beforeNode;
      newNode.next = afterNode, afterNode.prev = newNode;
      this.length++;
      return true;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail =node;
    let next;
    let prev = null;
    
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev =next;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
