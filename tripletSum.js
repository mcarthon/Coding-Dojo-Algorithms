function tripletSum(array, target) {
    let [firstIndex, secondIndex, thirdIndex] = [0, 1, 2];
    let [firstNumber, secondNumber, thirdNumber] = [array[firstIndex], array[secondIndex], array[thirdIndex]];
    let solutionArray = [];

    while (firstIndex < array.length - 2) {
        while (secondIndex < array.length - 1 ) {
            while (thirdIndex < array.length) {
                [firstNumber, secondNumber, thirdNumber] = [array[firstIndex], array[secondIndex], array[thirdIndex]];
                // console.log([firstNumber, secondNumber, thirdNumber]);
                if (firstNumber + secondNumber + thirdNumber == target) {
                    solutionArray.push([firstNumber, secondNumber, thirdNumber].sort((a, b) => a - b));
                    thirdNumber = array[++thirdIndex];
                }
                else {
                    ++thirdIndex;
                }
            }
            ++secondIndex;
            thirdIndex = secondIndex + 1;
        }
        ++firstIndex;
        secondIndex = firstIndex + 1;
        thirdIndex = secondIndex + 1;
    }
    if (solutionArray.length > 0) {
        return solutionArray;
    } console.log("No three numbers sum up to the target sum");
}

let array = [12, 3, 1, 2, -6, 5, -8, 6]
let targetSum = 9;
console.log(tripletSum(array, targetSum));
