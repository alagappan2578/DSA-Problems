
// The question is print like below mention pattern

// 1
//   2
//     3
//       4
//          3
//            2
//               1

function space(n){
  let str="";
  for (let i=n;i>=1;i--){
  str+="  ";
  }
  return str;

}

let m=4;

for(let i=1;i<=m;i++){
  console.log(space(i)+ i);
  
}
for(let i=m-1;i>=1;i--){
  console.log(space(i)+space(m-i)+space(m-i)+ i)
}

