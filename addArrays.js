function addArrays(array1, array2) {
	let output = [];
	array1 = array1.reverse();
	array2 = array2.reverse();
	let carry = 0;

	for (let i = 0; i < array1.length || i < array2.length; i++) {
		const a = array1[i] || 0;
		const b = array2[i] || 0;
		let sum = a + b + carry;
		carry = Math.floor(sum/10);
		sum %= 10;
		output.push(sum);
	}

	if (carry) {
		output.push(carry);
	}

	return output.reverse();
}

console.log(addArrays([1,2], [1]));  // should be [1,3]
console.log(addArrays([9,9,9], [1]));  // should be [1,0,0,0]
console.log(addArrays([9,7,3,7], [3,4,5]));  // should be [1,0,0,8,2]
console.log(addArrays([9,9,9], [1,1,1]));  // should be [1,1,1,0]
