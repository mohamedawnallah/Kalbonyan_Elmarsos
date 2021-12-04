class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        // Equals to pushing
        let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = this.first;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this;

    }

    dequeue() {
        // Equals to Shifting
		if (!this.first) return undefined;
		let currentHead = this.first;
		this.first = currentHead.next;
		this.size--;
		if (this.size === 0) {
			this.last = null;
		}
		return currentHead;
    }
}