function fibonacci(n){
    const fib=[0,1];
    for(let i=2;i<n;i++)
    {
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
};
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(5));

function fibonacci1(n){
    const fib=[0,1];
    for (let i=2; i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
};

function fibonacci2(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
};

function fibonacci3(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
}

function fibonacci4(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    };
    return fib;
};

function fibonacci5(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
};

console.log(fibonacci1(1));
console.log(fibonacci2(2));
console.log(fibonacci3(3));
console.log(fibonacci4(4));
console.log(fibonacci5(5));
console.log(fibonacci5(6));
console.log(fibonacci6(9));
function fibonacci6(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
};
console.log(fibonacci6(7));
