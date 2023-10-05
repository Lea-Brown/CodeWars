/* 7 kyu
Fibonacci's FizzBuzz

https://www.codewars.com/kata/57bf599f102a39bb1e000ae5

The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1]
Input:

fibsFizzBuzz(20)
Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
*/

var fibsFizzBuzz = function (n) {
  let result = [];
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(1);
      arr.push(1);
    } else {
      let fibNum = arr.slice(-2).reduce((a, b) => a + b);
      arr.push(fibNum);
      fibNum % 3 == 0 && fibNum % 5 == 0
        ? result.push('FizzBuzz')
        : fibNum % 5 == 0
        ? result.push('Buzz')
        : fibNum % 3 == 0
        ? result.push('Fizz')
        : result.push(fibNum);
    }
  }
  return result;
};
