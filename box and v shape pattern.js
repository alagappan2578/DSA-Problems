
// The question is print like below mention pattern
// 2. jber diamond for n=4 
// 1           1
// 1 2       2 1
// 1 2 3   3 2 1
// 1 2 3 4 3 2 1





function num(n){
  let str="";
  for (let i=1;i<=n;i++){
  str+=i+" ";
  }
  return str;

}
function rev_num(n){
  let str="";
  for (let i=1;i<=n;i++){
    if(n == m){
      n=n-1
      str= i +" "+ str;
    }
    else{
      str=i+" "+ str;
    }
  }
  return str;

}

function space(n){
  let str="";
  for (let i=n;i>=1;i--){
  str+="  ";
  }
  return str;

}

let m=5;

for(let i=1;i<=m;i++){
  console.log( num(i)+space(m-i)+space(m-i-1)+rev_num(i));
}






