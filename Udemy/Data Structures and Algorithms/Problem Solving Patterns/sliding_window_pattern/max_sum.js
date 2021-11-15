//Understanding The Problem
// we have array of consecutive elements we need to find the continous max value elements which depend on given value
// Inputs: (array, number)
// Outputs: the maxium value that is found

//Concrete Examples
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); => 10
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); => 17
//maxSubarraySum([4, 2, 1, 6], 1); => 6
//maxSubarraySum([4, 2, 1, 6, 2], 4); => 13
//maxSubarraySum([], 4); => null

//Break It Down
/*
function maxSubarraySum(array, num) {
    // initialize max variable
    // for looping through outer loop
    // making inner loop through each element in outer array
    // until we hit num param
    // then we compare the value of max variable with the max value chosen in the loop time
    // if the new value is max then we reset max value to newest one
    // then we return that value
}
*/

// Solve / Simplify
//Naive Solution

// Time Complexity: O(N**2)
// Space Complexity: O(1)

function maxSubarraySum(array, num) {
	let max = 0;
	if (num > array.length) {
		return null;
	}
	for (let i = 0; i < array.length; i++) {
		let sum = array[i];

		for (let j = i + 1; j < i + num && j < array.length; j++) {
			sum += array[j];
		}

		if (max < sum) {
			max = sum;
		}
	}

	return max;
}

//Sliding Window Pattern

//Time Complexity: O(N)
//Space Complexity: O(1)

function maxSubarraySum(array, num) {
	if (num > array.length) return null;

	let tempSum = 0;
	let maxSum = 0;
	for (let i = 0; i < num; i++) {
		tempSum += array[i];
	}
	maxSum = tempSum;
	for (let i = num; i < array.length; i++) {
		tempSum = tempSum - array[i - num] + array[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}
