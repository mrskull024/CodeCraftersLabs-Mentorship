function calculate(string) {
    const operatorWord = string.match(/\b(gains|loses)\b/gi);
    const numbersInString = string.match(/\d+/g);
    
    if(operatorWord && numbersInString.length >= 2){
      let result;
      const number1 = parseInt(numbersInString[0], 10);
      const number2 = parseInt(numbersInString[1], 10);
      
      return operatorWord.includes("gains") ? number1 + number2 : number1 - number2;
    }
  }