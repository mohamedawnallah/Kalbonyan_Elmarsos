
//No Swaps Optimization

function bubbleSort(arr) {
    let noSwaps;
	for (let i = 0; i < arr.length; i++) {
        noSwaps = true;
		for (let j = i + 1; j < arr.length; j++) {
			swap(arr[i], arr[j]);
            noSwaps = false;
		}
        if (noSwaps) break;
	}
	return arr;
}

function swap(elem1, elem2) {
	if (elem1 > elem2) {
		let temp = elem1;
		elem1 = elem2;
		elem2 = temp;
	}
}
console.log(bubbleSort([ 56, 36, 29, 8 ]));
