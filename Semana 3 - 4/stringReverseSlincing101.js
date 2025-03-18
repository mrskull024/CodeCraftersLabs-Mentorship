function reverseSlice(str) {
    let arr = str.split("").reverse().join("");
    let newArr = [];
    
    for(let i = 0; i< arr.length; i++){
      newArr.push(arr.slice(i));
    }
    
    return newArr;
  }