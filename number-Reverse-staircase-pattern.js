
// The question is print like below mention pattern
// 1. Reverse number staircase
//       1
//     2 1
//   3 2 1
// 4 3 2 1
// For n = 4


let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += "  ";
  }
  for (let k = i; k >= 1; k--) {
    string += k +" ";
  }
  string += "\n";
}
console.log(string);


// console.log(global)
// let global = "alagappan" ;
