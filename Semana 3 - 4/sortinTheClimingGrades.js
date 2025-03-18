function sortGrades(arr){
    return arr.sort((a, b) =>{
      const parse = g => g === "VB" ? -1 : g === "V0+" ? 0.5 : parseInt(g.slice(1));
      return parse(a) - parse(b);
    });
  }