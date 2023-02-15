
// The question is print like below mention pattern

// 1
//   2
//     3
//       4
//          3
//            2
//               1





// function rev_num(n){
//   let str="";
//   for (let i=1;i<=n;i++){
//     if(n == m){
//       n=n-1
//       str= i +" "+ str;
//     }
//     else{
//       str=i+" "+ str;
//     }
//   }
//   return str;

// }

// function num(n){
//   let str="";
//   for (let i=1;i<=n;i++){
//   str+=i+" ";
//   }
//   return str;

// }

// function space(n){
//   let str="";
//   for (let i=n;i>=1;i--){
//   str+="  ";
//   }
//   return str;

// }

// let m=4;

// for(let i=1;i<=m;i++){
//   console.log(space(i)+ i);
  
// }
// for(let i=m-1;i>=1;i--){
//   console.log(space(i)+space(m-i)+space(m-i)+ i)
// }


let m=4;
let n=4;
let str = ""
for(let i=1;i<=n;i++){
  for(let j=1;j<=m;j++){
    if(i>=j){
      str+= j + " ";
    }
    else{
      str+= "  ";
    }
  }
  for(let j=1;j<=3;j++){
    if(i==j){
      str+= "  ";
    }
    else{
      str+= "* ";
    }
  }

str += "\n";
}

console.log(str)







