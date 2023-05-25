function isPresent2d(arr2d, value) {
	for (let i = 0; i < arr2d.length; ++ i) {
		for (let j = 0; j < arr2d[i].length; ++ j) {
			if (arr2d[i][j] === value) {
				return true;
			}
		}
	}
	return false;
}

let example2d = [[0,1],[2,3]];
let exampled2 = [[0,1,2,3],[2,3,4,4],[9,7,8,6]];

console.log(isPresent2d(example2d, 0));
console.log(isPresent2d(example2d, 5));



function flatten(arr2d) {
    var flat = [];
    var counter = 0;    
	
    for (let i = 0; i < arr2d.length; ++ i) {
		for (let j = 0; j < arr2d[i].length; ++ j) {
			flat[counter] = arr2d[i][j];
			counter ++;
		}
	}

    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]