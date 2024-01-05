/* 7 kyu
Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()

https://www.codewars.com/kata/572af273a3af3836660014a1

Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

Finally, return arr.
*/

function infiniteLoop(arr, direction, n) {
  let flattened = [].concat(...arr);
  flattened =
    direction === 'left'
      ? flattened.slice(n).concat(flattened.slice(0, n))
      : flattened.slice(-n).concat(flattened.slice(0, -n));

  let count = 0;
  arr.forEach((innerArray, i) => {
    innerArray.forEach((e, j) => {
      arr[i][j] = flattened[count];
      count++;
    });
  });

  return arr;
}
