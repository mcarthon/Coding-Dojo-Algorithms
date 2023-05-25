function slice(array, start, end) {

    let newArray = [];

    if (start < 0) {

        start = 0;

    }

    else if (end > array.length) {

        end = array.length;

    }

    else {

        for (let i = start; i < end; ++i) {

            newArray.push(array[i]);

        }

    }

    return newArray;

}

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(slice(arr, 2, 6));
console.log(slice(arr, 4, 7));
console.log(slice(arr, -1, 3));

// Concatenate

function concat(arr1, arr2) {

    for (let i = 0; i < arr2.length; ++i) {

        arr1.push(arr2[i]);

    }

    return arr1;

}

console.log(concat(arr, [7, 8, 9]));