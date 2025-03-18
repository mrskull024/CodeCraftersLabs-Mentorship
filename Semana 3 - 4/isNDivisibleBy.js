function isDivisible(n, ...arguments){
    //Write your code here
    return arguments.length === 0 || arguments.every(num => n % num === 0);
  }