//    1
//   2 2
//  3 3 3
// 4 4 4 4
//  3 3 3
//   2 2
//    1

let n = 4;
let string = "";
for(let i = 1; i <=(n*2)-1; i++) {
    if(i <= 4){
        for(let j=1;j<=n-i;j++){
            string += " "
        }
        for(let j=1;j<=i;j++){
            string += i + " ";
        }

    }else{
        for(let j=1;j<=i-n;j++){
            string += " ";
        }
        for(let j=1;j<=(n*2)-i;j++){
            string += ((n*2)-i) + " ";
        }
    }


  console.log(string);
  string = "";
}

