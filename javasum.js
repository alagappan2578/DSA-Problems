let n=5;
let count1 = 0;
let count2 = 0;
let last = n * (n+1);

for (let i = n; i >= 1; i--){
    let string="";
for(let j = n; j>i; j--){
    string += " " ;
}



for (let j = 1; j<=i; j++){
count1 ++;
  string += count1 + "*" ;
}

for (let j = last-i+1; j<=last; j++){

    string += j ;

    if(j != last){
        count2++
        string += "*" ;
    }else{
        count2++
        last = last-count2;
        count2 = 0;
    }
  }
console.log(string);

}
