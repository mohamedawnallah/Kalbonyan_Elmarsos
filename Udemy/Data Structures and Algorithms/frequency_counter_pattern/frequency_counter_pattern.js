// Applying Problem Solving Approach:

// Understanding The Problem:
// Inputs : 2 (arrays)
// Outputs: Are The Same or Not
// Outputs depend on Inputs

// Concrete Examples:
// arr1 = [1,2,3] , arr2 = [4,1,9] -< Valid (as length is same as well as each char in arr1 is represented as square one in arr2)
// arr1 = [1,2,3], arr2 = [4, 9] -< Not valid (arr1.length !== arr2.length)
// arr1 = [], arr2 = [] -< valid (will return true as arr1.length === arr2.length)

// Break It down Pesudo Code Time:

// Checking The length of two arrays
// if they are not equal then we will return false
// If the length is equal we will go through outer array which is arr1
// getting index of char which is char squared into arr1 and find that index
// if we don't find that index we will return false that means they are not the same
// if it is found we will remove char we checked it before from second array
// then return true

// Solve / Simplify:

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}

// Look back and refactor

// The Problem with that version is it O(N**2) 💩

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let arr1Item of arr1) {
		let correctIndex = arr2.indexOf(arr1Item ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}

// Second Solution with O(2N) Time Complexity

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}

		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}

	return true;
}
