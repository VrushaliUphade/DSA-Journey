# 📘 Arrays Notes - DSA Journey

## 📌 What is an Array?

An array is a linear data structure that stores elements in contiguous
memory locations. Each element is accessed using an index, starting from
0.

Example:

``` javascript
let arr = [2, 5, 7, 3, 4, 9];
console.log(arr[0]); // 2
```

------------------------------------------------------------------------

# 1️⃣ Linear Search (Find Index of Element)

## 🔹Problem

Write a function that searches for an element in an array and returns
its index. If the element is not present, return -1.

## 🔹Theory

Linear search works by checking each element one by one. If the element
matches the target value, return the index. If the loop finishes and the
element is not found, return -1.

## 🔹Logic

Traverse the array using a loop. 

Compare each element with the given number.

If found → return index.

If not found → return -1.


## 🔹Time Complexity

O(n) → Because we may need to check all elements.

## 🔹Code

``` javascript
function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let arr = [2, 5, 7, 3, 4, 9];
let result = searchElement(arr, 7);
console.log(result);
```

------------------------------------------------------------------------

# 2️⃣ Count Negative Numbers

## 🔹Problem

Write a function that returns the number of negative numbers in an
array.

## 🔹Theory

We traverse the array and check each element. If the element is less
than 0, increase the counter.

## 🔹Logic

Initialize count = 0.

Traverse the array.

If element < 0 → increase count.

Return count.

## 🔹Time Complexity

O(n)

## 🔹Code

``` javascript
function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [2, 4, 6, 8, -3, -2, -9];
let result = countNegatives(arr);
console.log(result);
```

------------------------------------------------------------------------

# 3️⃣ Find Largest Element

## 🔹Problem

Write a function that returns the largest number in an array.

## 🔹Theory

We assume the largest value is -Infinity. Then compare each element with
it and update if needed.

Why -Infinity? Because any number is greater than -Infinity.

## 🔹Logic

Initialize largest = -Infinity.

Traverse the array.

If current element > largest → update largest.

Return largest.

## 🔹Time Complexity

O(n)

## 🔹Code

``` javascript
function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [2, 5, 7, 3, 9, 4];
let result = findLargest(arr);
console.log(result);
```

------------------------------------------------------------------------

# 4️⃣ Find Smallest Element

## 🔹Problem

Write a function that returns the smallest number in an array.

## 🔹Theory

We assume the smallest value is Infinity. Then compare each element and
update if smaller.

Why Infinity? Because any number is smaller than Infinity.

## 🔹Logic

Initialize smallest = Infinity.

Traverse the array.

If current element < smallest → update smallest.

Return smallest.

## 🔹Time Complexity

O(n)

## Code

``` js
function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [2, 5, 7, 3, 9, 4];
let result = findSmallest(arr);
console.log(result);
```

------------------------------------------------------------------------

More Array problems coming soon 🚀
