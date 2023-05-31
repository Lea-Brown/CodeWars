/* 7 kyu
How many are smaller than me?

https://www.codewars.com/kata/56a1c074f87bc2201200002e/javascript

Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:
* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
*/

function smaller(nums) {
  let result = [];
  for (let i = 1; i < nums.length; i++) {
    result.push(
      nums.slice(-(nums.length - i)).filter(e => e < nums[i - 1]).length
    );
  }
  result.push(0);
  return result;
}

// refractored by chat GPT, edited by me.

const smaller = nums =>
  nums.map((num, index) => nums.slice(index + 1).filter(e => e < num).length);
