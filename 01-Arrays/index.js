// //1.Write a function that searches for an element in an array and returns the index. if the element is not present then just return -1.
// function searchElement(arr,num){
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]==num){
//       return i;
//     }
// }
// return -1;
// }
// let arr = [2,5,7,3,4,9];
// let result = searchElement(arr,7);
// console.log(result);

// //2. write a function that returns the number of negative numbers in an array.
// function countNegatives(arr){
//     let count = 0 ;
//     for(let i = 0;i<arr.length;i++){
//       if(arr[i]<0){
//         count = count+1;
//       }
//     }
//       return count;
// }
// let arr = [2,4,6,8,-3,-2,-9]
// let result = countNegatives(arr)
// console.log(result);

// //3.write a funciton that returns the largest number in an array
// function findLargest(arr){
//     let largest = -Infinity;
//     for(let i = 0;i<arr.length;i++){
//       if(arr[i]>largest){
//         largest = arr[i]
//       }
//     }
//     return largest;
// }
// let arr = [2,5,7,3,9,4]
// let result = findLargest(arr)
// console.log(result);

// //4.write a funciton that returns the Smallest number in an array
// function findSmallest(arr){
//     let smallest = Infinity;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i]
//         }
//     } 
// return smallest;
    
// }
// let arr = [2,4,7,0,5,9,-6];
// let result = findSmallest(arr);
// console.log(result);

// //5.Write a function that returns the second largest number in an array.

// function secondLargest(arr){
//   let firstlargest = -Infinity;
//   let secLargest = -Infinity;
//   for(let i = 0;i<arr.length;i++){
//     if(arr[i]>firstlargest){
//         secLargest = firstlargest;
//         firstlargest = arr[i];
//     }
//     else if( arr[i]>secLargest){
//         secLargest = arr[i]
//     }     
//     }
//     return secLargest;
//   }
// let arr = [23,44,55,21,56,57,78,43]
// let result = secondLargest(arr)
// console.log(result);
// //This Problem has some corner cases
// //1.what if your array is empty
// //2.what id your array has negative number
// //3.what if your array has duplicates
// //4.what if your has infinity number

// //Star pattern
// 1. * * * * 
// // * * * * 
// // * * * *
// // * * * * 

// let  n = 4;
// for(let i = 0;i<n;i++){
//     let row = " "
//     for(let j = 0;j<n;j++){
//       row = row+"*"
//     }
//     console.log(row);   
// }

// //2. *
// //   * *
// //   * * *
// //   * * * *

// let  n = 4;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     for(let j = 0;j<i+1;j++){
//         row = row+ "*";
//     }
//     console.log(row);
// }

// // 3.
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5

// let n = 5;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     for(let j = 0; j<=i;j++){
//         row = row + (j+1);

//     }
//     console.log(row);  
// }

// // 4.
// // 1
// // 2 2
// // 3 3 3
// // 4 4 4 4
// // 5 5 5 5 5

// let n = 5;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     for(let j = 0; j<=i;j++){
//         row = row + (i+1);
//     }
//     console.log(row); 
// }


// // 5.
// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1

// let n = 5;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     for(let j =0 ;j<n-i;j++){
//         row = row + (j+1);
//     }
//     console.log(row);
    
// }

// // 6.
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *

// let n = 5;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     for(j = 0;j<n-i;j++){
//         row = row + "*"
//     }
// console.log(row);

// }

// // 7.
// // _ _ _ _ *
// // _ _ _ * *
// // _ _ * * *
// // _ * * * *
// // * * * * *

// let n =5;
// for(let i = 0;i<n; i++){
//     let row = " "
//     for(let j = 0;j<n-(i+1);j++){
//         row = row + "-"
//     }
//     for(let k = 0; k<i+1;k++){
//         row = row + "*"
 
//     }
//     console.log(row);
    
// }
 
////8.
// //  1
// //  10
// //  101
// //  1010
// //  10101

// let n = 5;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     let Switch = 1;
//     for(let j = 0;j<i+1;j++){
//         row = row + Switch
//        if(Switch == 1){
//         Switch = 0
//        }
//        else {
//          Switch =1;
//        }
//     }
//     console.log(row);   
// }

////9.
//  //1
//  //01
//  //010
//  //1010
//  //10101

// let n = 5;
// let Switch = 1;
// for(let i = 0;i<n;i++){
//     let row = " ";
//     for(let j = 0;j<i+1;j++){
//         row = row + Switch
//        if(Switch == 1){
//         Switch = 0
//        }
//        else {
//          Switch =1;
//        }
//     }
//     console.log(row);   
// }