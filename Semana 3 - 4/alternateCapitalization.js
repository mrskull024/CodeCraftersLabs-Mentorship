function capitalize(s){
  
    let parCapitalize = s.split("").map((char, ndx) => { 
      return ndx % 2 === 0 ? char.toUpperCase() : char.toLowerCase(); 
    }).join("");
    
    let imparCapitalize = s.split("").map((char, ndx) => { 
      return ndx % 2 === 1 ? char.toUpperCase() : char.toLowerCase(); 
    }).join("");
    
    //console.log(parCapitalize, imparCapitalize);
    
    return [parCapitalize, imparCapitalize];
  };