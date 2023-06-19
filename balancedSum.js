function balancedSum(array) {
    
    if (array.length < 3) {
        
        return -1;
        
    }    
    
    for (let breakPoint = 1; breakPoint < array.length - 2; ++ breakPoint) {
        
        let leftSideSum = array.slice(0, breakPoint).reduce((a, b) => a + b, 0);
        
        let rightSideSum = array.slice(breakPoint + 1, array.length).reduce((a, b) => a + b, 0);
        
        if (leftSideSum === rightSideSum) {
            
            return breakPoint;
            
        }
        
    }
    
    return -1;
    
}

const nums1 = [-2, 5, 7, 0, 1, 2];
console.log(`\n\nOutput for nums1:\n${balancedSum(nums1)}\n\n`);

const nums2 = [9, 9];
console.log(`\n\nOutput for nums2:\n${balancedSum(nums2)}\n\n`);

const nums3 = [-2, 5, 7, 1, 2, -1, -2, 1, 2];
console.log(`\n\nOutput for nums2:\n${balancedSum(nums3)}\n\n`);