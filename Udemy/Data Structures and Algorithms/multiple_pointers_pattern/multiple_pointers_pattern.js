// Sum Zero Func

// First Pair in Sorted Array in ascending Order where the sum is Zero

// Return that pair if it is not found return zero or undefined

// Understanding The Problem
// return numbers when addition they're equal to zero
// Inputs: array of integers
// Outputs: Array with first pair which equals zero
// Outputs Depending on Inputs so if Inputs don't contain any pair after summed equal to zero we will return zero or undefined

//Concrete Examples
//sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
//sumZero([-2, 0, 1, 3]) // undefined
//sumZero([1, 2, 3]) // undefined

//Break It Down

//Solve / Simlify
/*
Naive Solution
Time Complexity: O(N**2)
Space Complexity: O(1)
*/

function sumZero(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] + array[i] === 0) {
				return [ array[i], array[j] ];
			}
		}
	}
}
// Expected Output: [-3, 3]
sumZero([ -3, -2, -1, 0, 1, 2, 3 ]);

//Multiple Pointers Pattern Solution

//Time Complexity: O(N)
//Space Complexity: O(1)
function sumZero(array) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		let sum = array[left] + array[right];

		if (sum === 0) {
			return [ array[left], array[right] ];
		} else if (sum > 0) {
			right--;
		} else {
			left--;
		}
	}
}
