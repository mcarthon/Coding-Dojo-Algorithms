def makeFrequencyTable(array):
	frequency_table = {};

	keys = list(set(array));
	
	for key in keys:
		frequency_table[key] = 0;
		for string in array:
			if key == string:
				frequency_table[key] += 1;

	return frequency_table;

print(makeFrequencyTable(["", "b", "c", "c"]));
print(makeFrequencyTable([]));