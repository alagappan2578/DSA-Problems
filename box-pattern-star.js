
// The question is print like below mention pattern

// * * * * * * * 
// *           * 
// *           * 
// *           * 
// *           * 
// *           * 
// * * * * * * * 

let n = 3;
let pattern = "";

for (let i = 1; i <= n; i++) {
   for (let j = 1; j <= n; j++) {
      if (i == 1) pattern += j + " ";
      // else if (j == 1 || j == n) {
      //       pattern += "  ";
      //    } 
         else if (i == n) pattern = j + " " + pattern; 
         else {
            pattern += "  ";
         }
      
   }
   pattern += "\n";
}
console.log(pattern);
