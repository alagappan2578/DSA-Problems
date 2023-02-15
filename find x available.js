
// The question is find the X is avail


let a = [1,2,3,3,4];
let x = 3;
let found = 0;
for(let i=0; i<a.length;i++)
{
  if(x === a[i]){
    found++;
  }
}
if(found == 0){
  console.log(x + "  Is not found")
}
else if(found == 1){
  console.log(x + "  Is found 1 time")
}
else {
  console.log(x + " is found " + found + " times")
}

