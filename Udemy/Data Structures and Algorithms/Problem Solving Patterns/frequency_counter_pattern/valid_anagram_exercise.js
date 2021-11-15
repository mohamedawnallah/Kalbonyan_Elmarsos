// Non-Naive Solution

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let i = 0; i < str1.length; i++) {
        const char = str1.charAt(i);
		frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
	}
	for (let i = 0; i < str2.length; i++) {
        const char = str2.charAt(i);
		frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
	}

	for (let key in frequencyCounter1) {

		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}

	return true;
}
