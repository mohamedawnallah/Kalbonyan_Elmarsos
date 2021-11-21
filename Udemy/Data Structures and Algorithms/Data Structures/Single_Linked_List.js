class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList  {
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
        } else  {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop() {
        let currentNode = this.head;
        let newTail = this.currentNode;

        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        length--;
        if (length === 0) {
            this.head = null;
            this.tail = null;

        }
        return currentNode;

    }
}