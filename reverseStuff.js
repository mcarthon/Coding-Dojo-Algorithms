function oneFunctionToRuleThemAll(stuff) {
    if (stuff.trim().split(" ").length < 2) {
        let stringList = stuff.trim().split("");
        for (let i = 0; i < stringList.length/2; ++ i) {
            let temp = stringList[i];
            stringList[i] = stringList[stringList.length - 1 - i];
            stringList[stringList.length - 1 - i] = temp;
        }
        return stringList.join("");
    }
    let splitStringArray = stuff.trim().split(" ");
    for (let i = 0; i < splitStringArray.length/2; ++ i) {
        let temp = splitStringArray[i];
        splitStringArray[i] = splitStringArray[splitStringArray.length - 1 - i];
        splitStringArray[splitStringArray.length - 1 - i] = temp;
    }
    return splitStringArray.join(" ");  
}
let string = "hello there";
console.log(`\noneFunctionToRuleThemAll input: ${string}\noneFunctionToRuleThemAll output: ${oneFunctionToRuleThemAll(string)}\n`);

let biggerStringStuff = "regular sentnce pls";
console.log(`\noneFunctionToRuleThemAll input: ${biggerStringStuff}:\noneFunctionToRuleThemAll output: ${oneFunctionToRuleThemAll(biggerStringStuff)}\n`);

string = "      hello       ";
console.log(`\noneFunctionToRuleThemAll input: ${string}\noneFunctionToRuleThemAll output: ${oneFunctionToRuleThemAll(string)}\n`);

biggerStringStuff = "    I    don't    no   hao  2 spel    ";
console.log(`\noneFunctionToRuleThemAll input: ${biggerStringStuff}:\noneFunctionToRuleThemAll output: ${oneFunctionToRuleThemAll(biggerStringStuff)}\n`);
