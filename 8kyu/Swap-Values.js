/* 8 kyu
Swap Values

https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/javascript

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
*/

function swapValues(args) {
  let temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}
