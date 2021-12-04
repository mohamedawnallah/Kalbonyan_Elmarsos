class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        
        // Equal to UnShifting
        let newNode = new Node(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        this.size++;
        return this;

    }

    pop() {
       
        // Equal to Shifting (Removing element from beginning) 
       if(!this.first) return undefined;
       let poppedHead = this.first;
       if(this.length === 1) {
           this.last = null;

       }  
       this.first = this.first.next;
       this.size--;
       return poppedHead;
    }
}