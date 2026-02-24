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
# 5️⃣ Find Second Largest Element
## 🔹Problem

Write a function that returns the second largest number in an array.

## 🔹Theory

To find the second largest element:

We maintain two variables:

firstLargest

secLargest

Both are initialized to -Infinity.

While traversing the array:

If current element > firstLargest
→ Update secLargest = firstLargest
→ Update firstLargest = current element

Else if current element > secLargest
→ Update secLargest

Why -Infinity?
Because any number is greater than -Infinity, so it helps in comparison.

## 🔹Logic

Initialize:
```js
firstLargest = -Infinity  
secLargest = -Infinity
```

Traverse the array:

If element > firstLargest
→ secLargest = firstLargest
→ firstLargest = element

Else if element > secLargest
→ secLargest = element

Return secLargest.

## 🔹Time Complexity

O(n)
Because we traverse the array only once.

## 🔹Code
```js
function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secLargest = firstLargest;
      firstLargest = arr[i];
    } 
    else if (arr[i] > secLargest && arr[i] !== firstLargest) {
      secLargest = arr[i];
    }
  }

  return secLargest;
}

let arr = [23, 44, 55, 21, 56, 57, 78, 43];
let result = secondLargest(arr);
console.log(result);
```
 ## 🔹Corner Cases

1️⃣ What if the array is empty?
→ Return null or show error.

2️⃣ What if array has negative numbers?
→ Works correctly because we use -Infinity.

3️⃣ What if array has duplicates?
→ Make sure second largest is different from largest
(Handled using arr[i] !== firstLargest).

 4️⃣ What if array contains Infinity?
→  Logic still works because comparisons are valid.

------------------------------------------------------------------------



# ⭐ Pattern Problems (Loops Practice)

## Pattern problems help improve:

→ Nested loop understanding

→ Logical thinking

→ Row & column structure clarity


# 1️⃣ Square Star Pattern
## 🔹Problem

Print a square pattern of stars.
```
****
****
****
****
```
## 🔹Theory

Outer loop → Controls rows

Inner loop → Controls columns

Both loops run n times

## 🔹Logic

Run outer loop from 0 → n

For each row:

Run inner loop from 0 → n

Add "*" to row string

Print row

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------

# 2️⃣ Increasing Star Pattern
## 🔹Problem
```
*
**
***
****
```
## 🔹Theory

Inner loop runs i + 1 times.

## 🔹Logic

Outer loop → rows

Inner loop → runs from 0 → i

Print "*"

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------

# 3️⃣ Number Increasing Pattern
## 🔹Problem
```
1
12
123
1234
12345
```
## 🔹Theory

Print numbers from 1 to i+1 in each row.

## 🔹Logic

Outer loop → rows

Inner loop → 0 → i

Print (j + 1)

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------

# 4️⃣ Repeating Number Pattern
## 🔹Problem
```
1
22
333
4444
55555
```
## 🔹Theory

Each row prints the same number (i + 1).

## 🔹Logic

Outer loop → rows

Inner loop → 0 → i

Print (i + 1)

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------


# 5️⃣ Reverse Number Pattern
## 🔹Problem
```
12345
1234
123
12
1
```
## 🔹Theory

Inner loop decreases as row increases.

## 🔹Logic

Outer loop → 0 → n

Inner loop → 0 → n - i

Print (j + 1)

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------


# 6️⃣ Reverse Star Pattern
## 🔹Problem
```
*****
****
***
**
*
```
## 🔹Theory

Print stars but decrease count every row.

## 🔹Logic

Outer loop → rows

Inner loop → 0 → n - i

Print "*"

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------

# 7️⃣ Right-Aligned Star Pattern
## 🔹Problem
```
----*
---**
--***
-****
*****
```
## 🔹Theory

Two inner loops:

First → print spaces (or -)

Second → print stars

## 🔹Logic

First loop → n - (i + 1) times

Second loop → i + 1 times

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------


# 8️⃣ Alternating 1-0 Pattern
## 🔹Problem
```
1
10
101
1010
10101
```
## 🔹Theory

Use a toggle variable (Switch) that changes between 1 and 0.

## 🔹Logic

Initialize Switch = 1

Print Switch

Toggle:

If 1 → make 0

If 0 → make 1

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------

# 9️⃣ Continuous Alternating Pattern
## 🔹Problem
```
1
01
010
1010
10101
```
## 🔹Theory

Switch variable continues across rows.

## 🔹Logic

Keep Switch outside outer loop

Toggle after every print

## 🔹Time Complexity

O(n²)

------------------------------------------------------------------------



More Array problems coming soon 🚀
