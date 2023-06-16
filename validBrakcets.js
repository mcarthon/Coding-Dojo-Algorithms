function whyNotJava(string){
    
    string = string.replace(/[^\(\{\[\]\}\)]/g, "");
    console.log(`string: ${string}`);
    
    let leftParenthesis = "(";
    let leftSquiggly = "{";
    let leftBracket = "[";
    
    let rightParenthesis = ")";
    let rightSquiggly = "}";
    let rightBracket = "]";
    
    let leftParenthesisCount = (string.match(/\(/g || [])).length;
    console.log(`\nleft parenthesis count: ${leftParenthesisCount}\n`);
    
    let leftSquigglyCount = (string.match(/\{/g || [])).length;
    console.log(`\nleftsquiggly count: ${leftSquigglyCount}\n`);
    
    let leftBracketCount = (string.match(/\[/g || [])).length;
    console.log(`\nleft bracket count: ${leftBracketCount}\n`);
    
    let rightParenthesisCount = (string.match(/\)/g || [])).length;
    console.log(`\nright parenthesis count: ${rightParenthesisCount}\n`);
    
    let rightSquigglyCount = (string.match(/\}/g || [])).length;
    console.log(`\nright squiggly count: ${rightSquigglyCount}\n`);
    
    let rightBracketCount = (string.match(/\]/g || [])).length;
    console.log(`\nright bracket count: ${rightBracketCount}\n`);
    
    if (leftParenthesisCount != rightParenthesisCount) {
        return false;
    }
    if (leftSquigglyCount != rightSquigglyCount) {
        return false;
    }
            
    if (leftBracketCount != rightBracketCount) {
        return false;
    }
    
    if (string.indexOf(rightParenthesis) < string.indexOf(leftParenthesis)) {
        return false;
    }
    if (string.indexOf(rightBracket) < string.indexOf(leftBracket)) {
        return false;
    }
    if (string.indexOf(rightSquiggly) < string.indexOf(leftSquiggly)) {
        return false;
    }
    
    // onlyParenthesis = string.replace(/[^\(\)]/g, "");
    // for (let i = leftParenthesisCount; i > -1; -- i) {
        
    // }
    
    return true;
}
const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
console.log(`\nwhyNotJava output: ${whyNotJava(str1)}\n`)

const str2 = "D(i{a}l[ t]o)n{e";
console.log(`\nwhyNotJava output: ${whyNotJava(str2)}\n`)

const str3 = "A(1)s[O (n]0{t) 0}k";
console.log(`\nwhyNotJava output: ${whyNotJava(str3)}\n`)
