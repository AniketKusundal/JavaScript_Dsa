//   FACTORIAL 
function factorial(n) {
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
    
        result = result * i;
        
    }
    return result;
}


console.log(factorial());
console.log(factorial(5));



//  --- >   It is Linear Type Complexity