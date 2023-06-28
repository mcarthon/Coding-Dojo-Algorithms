function binarySearchAscending(array, target) {
    
    if (array.length <= 0) {
        
        return false;
        
    }
    
    if (array.length === 1) {
        
        if (array[0] === target) {
            
            return true;
            
        }
        
        return false;
        
    }
    
    let middleIndex = Math.ceil((array.length - 1) / 2);
    
    let leftSide = array.slice(0, middleIndex);
    let rightSide = array.slice(middleIndex, array.length);
    
    if (target < array[middleIndex]) {
        
        return binarySearchAscending(leftSide, target);
        
    }
    
    return binarySearchAscending(rightSide, target);
       
}

console.log(`\n\nbinary search:\n${binarySearchAscending([1,2,3,4,5], 3)}\n\n`);
console.log(`\n\nbinary search:\n${binarySearchAscending([3,6,9,12,15,18], 10)}\n\n`);
console.log(`\n\nbinary search:\n${binarySearchAscending([50, 60, 75, 80, 90, 100], 75)}\n\n`);