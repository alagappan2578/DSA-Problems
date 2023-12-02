

//   1 2 3 2 1
//     1 2 1 
//       1

let n=4;
let string = "";
for(let i=1;i<=(n+n)-1;i++){
    if(i <=n){
    for(let j=1;j <= n+(n-i)-i+1 ;j++){
        string+= (n-i+1) + " ";
    }

    console.log(string)
    string ="";
}
}


/*
n = 4
1 7 = (4)+(n-i)-i-1 = 7
2 5 = (4)+(4-2)-1 = 5
3 3 = 4 + 4-3 -2  = 3 
4 1 = 4 + 4-4 - 3 = 1
 */