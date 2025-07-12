/* 8 kyu
Reversed Words

https://www.codewars.com/kata/51c8991dee245d7ddf00000e/typescript

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

export function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
}
