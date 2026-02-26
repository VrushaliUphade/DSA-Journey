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
 
// //8.
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

// //9.
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

// //while Loop
// //1.write a function that returns the count of digit in a number.

// function countDigit(n){
//   if(n == 0) return 1;
//   n = Math.abs(n);
//     let count = 0
//     while(n>0){
//       n = Math.floor(n/10);
//       count ++;
//     }
//     return count
// }
// let num = -0;
// let result = countDigit(num);
// console.log(result);

// //2.Palindrome Number
// let isPalindrome = function(n){
//     if(n<0) return false;
//     let nCopy = n
//   let rev =0;
//   while(n>0){
//     let rem = n%10
//     rev = (10 * rev )+rem;
//     n = Math.floor(n/10)
//   }
//  if(rev===nCopy){
//     return true
//  }
//  else{
//     return false
//  }
// }
// let n = -121;
// let res = isPalindrome(n)
// console.log(res);

// //3.Reverse Number

// let reverse = function(x){
// let xCopy = x;
// x = Math.abs(x)
//    let rev = 0;
//    while(x>0){
//       let last  = x%10;
//       rev = (10*rev)+last;
//       x = Math.floor(x/10)
//    }
//    if(xCopy<0){
//       return -rev
//    }
//    else{
//       return rev
//    }
// }
// let x =-123;
// let res = reverse(x);
// console.log(res);

// //4.Removes Duplicates from array(leetcode_26)

// let removes = function(arr){
//     let x = 0;
//    for(let i = 0;i<arr.length;i++){
//     if(arr[i]>arr[x]){
//         x = x+1;
//     arr[x]=arr[i];
//     }
//    }
//    return x+1; 
// }
// let arr = [0,0,1,1,1,2,2,3,3,4];
// let res = removes(arr);
// console.log(arr);

// //4.Remove Element (leetcode_27)

// let remove = function(nums,val){
//     let x = 0;
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i]!=val){
//             nums[x]=nums[i];
//             x=x+1;
//         }
//     }
//     return x;
// }
// let nums = [3,2,1,5,3,4,8,3];
// let val = 3;
// let res = remove(nums,val);
// console.log(nums);

// // 5.Reverse String

// let reverseString = function(s){
// let len = s.length;
// let halflen = Math.floor(len/2);
// for(let i = 0;i<halflen;i++){
//     let temp = s[i];
//        s[i] = s[len-1-i]
//        s[len-1-i] = temp;
// }
// return s;
// }
// s = ["h","e","l","l","o"]
// let res = reverseString(s);
// console.log(res);


    