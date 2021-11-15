// Understanding The Problem
// return the count of unique values in a given array
// Inputs: array of Integers
// Outputs: number of unique values as explained previously
// Outputs depends on Inputs

// Concrete Examples
// countUniqueValues([1,1,1,1,1,2]) -< 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -< 7
// countUniqueValues([]) -< 0
// countUniqueValues([-2,-1,-1,0,1]) -< 4

// Break It Down
// Naive Solution
/*
function countUniqueValues(arr) {
 // initialize a count var
 // Going Through outer array
 // compare each value with next ones through internal loop
 // if values are not equal, we add one to count variable
 
}
*/

// Solve / Simplify

// Navie Solution
// Time Complexity O(N**2)
// Space Complexity O(N)
function countUniqueValues(arr) {
	let uniqueArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] !== arr[j] && uniqueArray.indexOf(arr[i]) === -1) {
				uniqueArray.push(arr[i]);
			}
		}
	}
	if (uniqueArray.indexOf(arr[arr.length - 1]) === -1 && arr.length !== 0) {
		uniqueArray.push(arr[arr.length - 1]);
	}

	return uniqueArray.length;
}

// Look Back and Refactor

//  Multiple Pointer Pattern

//Time Complexity O(N)
//Space Complexity O(N)
function countUniqueValues(arr) {
	let left = 0;
	let right = arr.length - 1;
	let uniqueArray = [];

	while (left <= right) {
	 if (uniqueArray.indexOf(arr[left]) === -1) {
	   uniqueArray.push(arr[left]);
	 }
	 left++
	}
	return uniqueArray.length;
}


// Improved Performance Multiple Pointers Pattern Mixed with Frequency Counter Pattern

//Time Complexity : O(N)
//Space Complexity: O(1)

function countUniqueValues(arr) {
	let left = 0;
	let right = arr.length - 1;
	let frequencyCounter = {};
	while (left <= right) {

	 if (Object.keys(frequencyCounter).indexOf(arr[left]) === -1) {
	   frequencyCounter[arr[left]] = (frequencyCounter[arr[left]] || 0) + 1;

	 }
	 left++
	}
	return Object.keys(frequencyCounter).length;
}