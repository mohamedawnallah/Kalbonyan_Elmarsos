class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let currentNode = this.head;
		let newTail = currentNode;
		while (currentNode.next) {
			newTail = currentNode;
			currentNode = currentNode.next;
		}
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentNode;
	}
	shift() {
		//Remove Element from Start
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (length === 0) {
			this.tail = null;
		}
		return currentHead;
	}
	unshift(val) {
		// Add The Element at beginning
		let newHead = new Node(val);
		if (!this.head) {
			this.head = newHead;
			this.tail = newHead;
		} else {
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let currentNode = this.head;
		let i = 0;
		while (currentNode) {
			if (index === i) {
				return currentNode;
			}
			currentNode = currentNode.next;
			i++;
		}
	}
	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		let newNode = new Node(val);
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);
		let prevNode = this.get(index - 1);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		var previousNode = this.get(index - 1);
		var removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
	}
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
   
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
       }
       print(){
           var arr = [];
           var current = this.head
           while(current){
               arr.push(current.val)
               current = current.next
           }
           console.log(arr);
       }
}
