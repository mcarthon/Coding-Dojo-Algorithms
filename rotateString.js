function rotateString(string, amount) {
    
    if (amount < 1) {
        return string;
    }
    
    let newStartSubstring = "";
    let cutOffOriginalString = string.split("");
    
    
    for (let i = string.length - amount; i <= string.length - 1; ++ i) {
        newStartSubstring += string[i];
        cutOffOriginalString.pop(i);
    }
    
    return newStartSubstring + cutOffOriginalString.join("")
}
console.log(rotateString("Hello World", 3));
console.log(rotateString("Hello World", 4));
console.log(rotateString("Hello World", 0));
console.log(rotateString("Hello World", 1));

function isStringRotated(string1, string2){
    
    if (string1 === string2) {
        return true;
    }
    
    if (string1.length !== string2.length) {
        return false;
    }
    
    for (let i = 1; i < string1.length; ++ i) {
        let rotatedString = rotateString(string1, i);
        if(string2 === rotatedString){
            return true;
        }
    } return false;
}
const strA1 = "ABCD";
const strB1 = "CDAB";
console.log(isStringRotated(strA1, strB1));

const strA2 = "ABCD";
const strB2 = "CDBA";
console.log(isStringRotated(strA2, strB2));

const strA3 = "ABCD";
const strB3 = "BCDAB";
console.log(isStringRotated(strA3, strB3));