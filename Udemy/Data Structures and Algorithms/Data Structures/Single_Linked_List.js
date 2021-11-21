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
}
