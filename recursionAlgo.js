function recursiveSigma(number) {
    
    if (number < 1) {
        
        return 0;
        
    }
    
    return number + recursiveSigma(number - 1);
    
}

console.log(`\n\nOutput of recursiveSigma(5): \n${recursiveSigma(5)}\n\n`);

function sumArray(array) {
    
    if (array.length === 0) {
        
        return 0;
        
    }
    
    return array.pop() + sumArray(array);
    
}

console.log(`\n\nOutput of sumArray([1,2,3,4,5]): \n${sumArray([1, 2, 3, 4, 5])}\n\n`);





function factorial(number) {
    
    number = Math.floor(number);
    
    if (number < 2) {
        
        return 1;
        
    }
    
    return number * factorial(number - 1);
        
}

console.log(`\n\nOutput of factorial(5): \n${factorial(5)}\n\n`);

function fibonacci(number) {
    
    if (number < 2) {
        
        return number;
        
    }                    
    
    return fibonacci(number - 1) + fibonacci(number - 2);
    
}

console.log(`\n\nOutput of fibonacci(5): \n${fibonacci(5)}\n\n`);
