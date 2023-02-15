
// The question is print like below mention pattern
// n = 2
//   1  
//   1
// 22122
//   1
//   1
// n = 3
//    1
//    1
//    1
// 3331333
//    1
//    1
//    1

   
let n = 3;
let string = "";
for (let j = 1; j <= n; j++) {
  string +=" ".repeat(n) + 1;
  string += "\n";
}
for (let j = 1; j <= (n*2 + 1); j++) {
  if (j == n+1){
    string += 1 ;
  }
  else {
    string += n ;
  }
}
string += "\n";
for (let j = 1; j <= n; j++) {
  string +=" ".repeat(n) + 1;
  string += "\n";
}
console.log(string)


