function sumDigits(number) {        

    const stringList = number.toString().split("");
    
    if (stringList.length < 2) {

        return parseInt(stringList[0]);

    }

    return parseInt(stringList.pop()) + sumDigits(parseInt(stringList.join("")));

}

console.log(sumDigits(123));
console.log(sumDigits(1234567890));
console.log(sumDigits(99));