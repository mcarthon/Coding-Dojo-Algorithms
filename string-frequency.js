function makeFrequencyTable(array) {

	frequencyTable = {};

	const setStrings = new Set(array);

	const keys = Array.from(setStrings);
		
	for (let j = 0; j < keys.length; ++ j){

		let key = keys[j];
		frequencyTable[key] = 0;

		for (let i = 0; i < array.length; ++ i) {
			if (array[i] === key) {
				frequencyTable[key]++;
			}
		}
	}	return frequencyTable;
}

console.log(makeFrequencyTable(["", "b", "c", "c"]));
console.log(makeFrequencyTable([]));