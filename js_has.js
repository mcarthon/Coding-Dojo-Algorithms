function jsHash(keys, values) {
    let hashMap = {};

    for (let index = 0; index < keys.length; ++ index) {
        hashMap[keys[index]] = values[index];
    }

    return hashMap
}
const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
console.log()
console.log(jsHash(keys1, vals1));
console.log();

function invertHash(dictionary) {
    const dictionaryKeys = Object.keys(dictionary);
    const dictionaryValues = Object.values(dictionary);

    return jsHash(dictionaryValues, dictionaryKeys);
}

console.log(invertHash(jsHash(keys1, vals1)));
console.log();