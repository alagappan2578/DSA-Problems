
// The question is print like below mention pattern
// Number staircase
//       1
//     2 1
//   3 2 1
// 4 3 2 1
// For n = 4


let n = 4;
let string = "";

for(let i = 1; i <=n; i++){
  for(let j = i; j <=(n-1); j++){
    string += " ";
  }
  for(let k = i; k >=1; k--) { 
        string += k + " ";
      }
  string += "\n";

}

// for(let i = 1; i <=n; i++) { 
//   for(let j = i; j <=n; j++) { 
//     string += ".";
//   }
//   for(let j = 1; j <=i; j++) { 
//     string += j + " ";
//   }
//   string += "\n";
// }
console.log(string);

