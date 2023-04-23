/* 7 kyu
Last

https://www.codewars.com/kata/541629460b198da04e000bb9/javascript

Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

const last = (...list) => {
  const result = list.pop();
  return result.length > 1 ? result[result.length - 1] : result;
};
