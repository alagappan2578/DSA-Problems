
// The question is print like below mention pattern

// * * * * * * * 
// *           * 
// *           * 
// *           * 
// *           * 
// *           * 
// * * * * * * * 

let n = 8; 
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "* ";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "* ";
      }
      else {
        string += "  ";
      }
    }
  }

  string += "\n";
}

console.log(string);

