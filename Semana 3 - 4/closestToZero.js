function closest(arr){
    // return null if it is not possible to return 1 unique closest value
    if (!arr.length) return null;
  
      let closestToZero = arr[0];
  
      for (let num of arr) {
          if (Math.abs(num) < Math.abs(closestToZero) || (Math.abs(num) === Math.abs(closestToZero) && num > closestToZero)) {
              closestToZero = num;
          }
      }
      if (arr.includes(-closestToZero) && closestToZero !== 0) {
          return null;
      }
      
      console.log(closestToZero)
      
      return closestToZero;
  }