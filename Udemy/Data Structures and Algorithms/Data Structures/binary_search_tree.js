class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				if (value === current.value) return undefined;
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else {
					if (current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	find(value) {
		if (this.root === null) return false;
		let current = this.root;
		found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
	//Breadth First Search
	BFS() {
		let node = this.head;
		let data,
			queue = [];
		queue.push(this.root);
		while (queue.length) {
			node = queue.shift();
			data.push(node);
			if (node.left) data.push(node.left);
			if (node.right) data.push(node.right);
		}
		return data;
	}
	DFSPreOrder() {
        // Visit node first, traverse left and right
		let data = [];
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	DFSPostOrder() {
		// We visit 2e node `after` we look on the left, and right
		let data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.root);
		return data;
	}
	DFSInOrder() {
        // We go until leaf (with no children)
        // Visit the node secondly
        // we traverse the entrie left side then visit the node, then traverse the entire right side, then visit the node
		let data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);

			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(20);
tree.root.left = new Node(5);
tree.root.left.right = new Node(9);
