function recursiveFibonacci(n) {
    if (n < 2) {
      // console.log('jhv',n)
      return n
    }
    // let val = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
    // console.log("djfuysdd",val)
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
  }
  
  // console.log(recursiveFibonacci1(0)) // 0
  // console.log(recursiveFibonacci1(1)) // 1
  // console.log(recursiveFibonacci1(2)) // 8
  // console.log(recursiveFibonacci1(3));
  console.log(recursiveFibonacci(5));

                               