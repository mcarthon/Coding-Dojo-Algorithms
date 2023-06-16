function updateInventory(currentInventory, newInventory) {
    
    if (currentInventory.length === 0) {
        
        return newInventory;
        
    }
    
    if (newInventory.length === 0) {
        
        return currentInventory;
        
    }
    
    let isInCurrentInventory = false;
    
    for (let i = 0; i < newInventory.length; ++ i) {
        
        for (let j = 0; j < currentInventory.length; ++ j) {
            
            isInCurrentInventory = false
            
            if (currentInventory[j].name === newInventory[i].name) {
                
                currentInventory[j].quantity += newInventory[i].quantity;
                
                isInCurrentInventory = true;
                
                break;
                
            }
            
        }
        
        if (isInCurrentInventory === false) {
            
            currentInventory.push(newInventory[i]);
            
        }
        
    }
    
    return currentInventory;
    
}

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];

console.log(updateInventory(currInv1, newInv1));
console.log()
console.log(updateInventory(currInv2, newInv2));
console.log()
console.log(updateInventory(currInv3, newInv3));