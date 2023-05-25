let lengthOfArray = Math.floor(Math.random() * 9) + 1;
let array = [];

for (let i = 0; i < lengthOfArray; i++) {

    array.push(Math.floor(Math.random() * 100));

}

console.log(`The original array is [${array}].`);

let j = 0;
let i = array.length - 1;

while (i > j) {
    if (i === j) {
        break;
    }
    else {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        j++;
        i--;
    }
}


console.log(`The array after my terrible reverse algorithm is [${array}].`);