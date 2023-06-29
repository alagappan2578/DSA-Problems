// function maxSubarray(arr) {
//   let maxSubarraySum = arr[0];
//   let maxSubsequenceSum = 0;
//   let currentSubarraySum = 0;
//   let maxElement = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     maxElement = Math.max(maxElement, arr[i]);
//     currentSubarraySum = Math.max(arr[i], currentSubarraySum + arr[i]);
//     maxSubarraySum = Math.max(maxSubarraySum, currentSubarraySum);
//     if (arr[i] > 0) {
//       maxSubsequenceSum += arr[i];
//     }
//   }
//   //    console.log(maxElement)
//   if (maxSubsequenceSum === 0) {
//     maxSubsequenceSum = maxElement;
//   }
//   return [maxSubarraySum, maxSubsequenceSum];
// }
let arr = [-2,-5,-4,-1]

function maxSubarray(arr) {
    // Write your code here
     let maxSubarraySum = -Infinity;
  let maxSubsequenceSum = 0;
  let currentSubarraySum = 0;

  for (let i = 0; i < arr.length; i++) {

    currentSubarraySum = Math.max(arr[i], currentSubarraySum + arr[i]);

    maxSubarraySum = Math.max(maxSubarraySum, currentSubarraySum);

    if (arr[i] > 0) {
      maxSubsequenceSum += arr[i];
    }

  }
  if (maxSubsequenceSum === 0) {
    maxSubsequenceSum = maxSubarraySum;
  }
  return [maxSubarraySum, maxSubsequenceSum];

}

console.log(maxSubarray(arr))























// 0 1 2 3 4 5 

// 01 12 23 34 45 

// 012 123 234 345

// 0123 1234 2345

// 01234 12345




//     for(let i=arr.length;i>0;i--){
//     for(let j=0; j<arr.length-1; j++){
// let sum = 0
//     for(let k=0; k<=j; k++){
// sum += arr[j]

// }

// }

// }

