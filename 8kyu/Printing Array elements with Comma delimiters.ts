/* 8 kyu
Printing Array elements with Comma delimiters

https://www.codewars.com/kata/56e2f59fb2ed128081001328/typescript

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
*/

export function printArray(array: Number[]): string {
  return array.join();
}
