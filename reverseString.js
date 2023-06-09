function reverseString(text) {
    stringList = [];
    for (let ind = 0; ind < text.length; ++ ind) {
        stringList[ind] = text[ind];
    }
    console.log(stringList);

    for (let i = 0; i < stringList.length / 2 ; ++ i) {
        let temp = stringList[i];
        stringList[i] = stringList[stringList.length - i - 1];
        stringList[stringList.length - i - 1] = temp;
    }
    console.log(stringList);

    for (let j = 0; j < stringList.length; ++ j) {
        stringList[j] += "";
    }
    return stringList
}

console.log(reverseString("string"));