
// The question is print like below mention pattern
// If n = 7
// then the output is
// For 1 to N if a number is a multiple of 3 it should print Superstar
// If a number is a multiple of 5 it should say Rajnikanth
// If a number is a multiple of 3 and 5 it should say SuperStar Rajnikanth
// Else the code should print the number.
// Example output for n = 15.
// 1
// 2
// Superstar
// 4
// Rajnikanth
// Superstar
// 7
// 8
// Superstar
// Rajnikanth
// 11
// Superstar
// 13
// 14
// Superstar Rajnikanth


let n = 15;

for( let i = 1; i<=n ; i++){

 if (i % 5 === 0 && i % 3 === 0){
    console.log("Superstar Ranjinikanth");
  }
  else if (i % 5 === 0){
    console.log("Ranjinikanth");
  }
  else if (i % 3 === 0){
    console.log("Superstar");
  }
  else{
    console.log(i)
  }
}


