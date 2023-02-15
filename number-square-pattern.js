
// The question is print like below mention pattern
// If n = 7
// then the output is
// 1 1 1 1 1 1 1
// 2 2 2 2 2 2 2
// 3 3 3 3 3 3 3
// 4 4 4 4 4 4 4
// 5 5 5 5 5 5 5
// 6 6 6 6 6 6 6
// 7 7 7 7 7 7 7



let n = 7;
let string = "";

for(let i = 1; i <=n; i++) { 
  for(let j = 1; j <=n; j++) { 
    string += i + " ";
  }
  string += "\n";
}
console.log(string);
