// Recursion Practise
// I don't know anything about recursion

// ***Sum of natural numbers***

function sumOfNatNums(n) {
	if (n === 1) {
		return n;	
	}
	else {
		
		return n + sumOfNatNums(n-1);
	}
}	

console.log(`\nSum of natural numbers is: ${sumOfNatNums(10)}\n`);

// ***Calculating the power of an integer***

function exponent(n, power) {
	if (Math.abs(n) < 2 || power === 1) {
		return n;
	}
	else if (power === 0) {
		return 1;
	}
	else {
		return n * exponent(n, power - 1);
	}
}

console.log(`Output of exponent function is ${exponent(10, 3)}\n`);

// ***Check if a string is a palindrome***

let index = 0;
function isPalindrome(text) {
	if (text.length < 2) {
		return true;
	}
	else {
		if (text[0] === text[text.length - 1]) {
			return isPalindrome(text.substring(index++, text.length - 1 - index));
		}
	} return false;
}

let testString = "abacdaba";
console.log(`Is "${testString}" a palindrome? ${isPalindrome(testString)}\n`);

// ***Check how often a given element appears in an array***

// copy the array first

let i = 0;
function copyArray(array) {
	let newArray = [];

	if (array.length < 1) {
		return newArray;
	} newArray[i++] = array
}

let count = 0;
function howManyTimes(array, target) {	
	if (array.length < 2) {
		if (target === array[0]) {
			return count;
		} return count;
	} 
	else if (target === array[array.length - 1]) {
			count++;
			return howManyTimes()
	}
}























