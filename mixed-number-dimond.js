
// The question is print like below mention pattern
// 2. jber diamond for n=4 
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
//   1 2 3 2 1
//     1 2 1 
//       1
   


//  let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += "  ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += k + " ";
//   }
//   for(let l = i-1; l >= 1; l--){
//     string += l + " " ;
//   }
//   string += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     string += "  ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += k + " ";
//   }
//   for (let j =(i-1); j >= 1; j--) {
//     string += j + " ";
//   }

//   string += "\n";
// }
// console.log(string);




function num(n){
  let str="";
  for (let i=1;i<=n;i++){
  str+=i+" ";
  }
  return str;

}

function reverseNum(n){
  let str="";
  for(let i=n-1;i>=1;i--){
      str+=i + " ";
  }
  return str;
}

function space(n){
  let str="";
  for (let i=1;i<=n;i++){
  str+= "  ";
  }
  return str;
}

let n=4;

for(let i=1;i<=n;i++){
  console.log( space(n-i+1) + num(i) + reverseNum(i));
}
for(let i=n-1;i>0;i--){
  console.log( space(n-i+1) + num(i) + reverseNum(i));
}





