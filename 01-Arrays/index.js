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
