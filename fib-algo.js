let n = 6;
console.log(fib(n));


function fib(n) {

	var lastTwo = [0,1];
	var i = 2;

	if (n < 2) {
		return lastTwo[n-1];
	} 
	else {

		while(i < n) {

		lastTwo.push(lastTwo[i - 2] + lastTwo[i - 1]);

		i++;

		}
	}console.log(lastTwo);
	 return lastTwo[n - 1];
}


