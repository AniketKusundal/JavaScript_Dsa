
function fabonacci(n) {
    const fibo = [0 , 1];

    for (let i = 2; i<n; i++)
        {

            fibo[i] = fibo[i-1] + fibo[i-2]

        }

    return fibo
    
}

console.log(fabonacci(5));
console.log(fabonacci(2));
console.log(fabonacci(3));



// Big O = O(n)  
// --->    It Is Linear Type Complexity