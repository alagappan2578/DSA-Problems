
// The question is find the X is avail

// // // Write the program where the first element is the minimum in an array for eg let a = [48, 1, 4, 7], output should be [1,48, 4, 7].

let a = [48, 4, 1, 7]
let min = a[0];
let index = 0
for(i=1;i<a.length;i++){

    let value = a[i];
    
    if(min > value){
        min = value
        index = i
    }

}

// let x = a[0]
// let y = a[index]
const temp = a[0];
a[0] = a[index];
a[index] = temp;

console.log(a);



// let arr = [5,5,5,5,5];

//     // Write your code here
//     let sum = 0;
//     let array = [];

//     for(let i=0;i<arr.length;i++){
//         for(let j=0; j<arr.length;j++){
//             if(arr[i] !== arr[j]){
//                 sum += arr[j];
//             } 
//         }
//         array.push(sum)
//         sum= 0;
        
//     }
//     let min = Math.min(...array);
//     let max = Math.max(...array);
// if(min == 0 && max == 0){
//     console.log(array)
// }

// else{
//     console.log (min, max)
// }
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateString(5));