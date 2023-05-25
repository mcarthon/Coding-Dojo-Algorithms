function targetSum(array, target) {
    let [firstIndex, secondIndex] = [0, 1];
    let [firstNumber, secondNumber] = [array[firstIndex], array[secondIndex]];

    while(firstIndex < array.length - 1) {
        if (firstNumber >= target) {
            firstNumber = array[++firstIndex];
            secondNumber = array[++secondIndex];
        }
        else {
            while(secondIndex < array.length) {
              firstNumber = array[firstIndex];
              secondNumber = array[secondIndex];
                if (firstNumber + secondNumber == target) {
                    return [firstIndex, secondIndex];
                }
                else {
                    secondNumber = array[++secondIndex];
                }
            }
            firstIndex++;
            secondIndex = firstIndex + 1;
        }
    }
    console.log("no sum in the array");
}

let testArray = [10,1,2,3,4,5];
let testTarget = 9;
console.log(targetSum(testArray, testTarget));