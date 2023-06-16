def oneFunctionToRuleThemAll(stuff):
    if len(stuff.strip().split(" ")) < 2:
        stringList = list(stuff.strip())
        for i in range(int(len(stringList)/2)):
            temp = stringList[i]
            stringList[i] = stringList[len(stringList) - 1 - i]
            stringList[len(stringList) - 1 - i] = temp
        # print(stringList)    
        return "".join(stringList)
        
    stringList = stuff.strip().split(" ")
    print(stringList)
    for i in range(int(len(stringList)/2)):
        temp = stringList[i]
        stringList[i] = stringList[int(len(stringList)/2) - 1 - i]
        stringList[int(len(stringList)/2) - 1 - i] = temp
        
        
    return " ".join(stringList)

string = "hello there"
print(f"oneFunctionToRuleThemAll input: {string}\noneFunctionToRuleThemAll output: {oneFunctionToRuleThemAll(string)}\n")

biggerStringStuff = "regular sentnce pls"
print(f"oneFunctionToRuleThemAll input: {biggerStringStuff}:\noneFunctionToRuleThemAll output: {oneFunctionToRuleThemAll(biggerStringStuff)}\n")

string = "      hello       "
print(f"oneFunctionToRuleThemAll input: {string}\noneFunctionToRuleThemAll output: {oneFunctionToRuleThemAll(string)}\n")

biggerStringStuff = "    I    don't    no   hao  2 spel    "
print(f"oneFunctionToRuleThemAll input: {biggerStringStuff}:\noneFunctionToRuleThemAll output: {oneFunctionToRuleThemAll(biggerStringStuff)}\n")