/* 8 kyu
Triple Trouble

https://www.codewars.com/kata/5704aea738428f4d30000914/typescript

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

export function tripleTrouble(one: string, two: string, three: string): string {
  let result: string[] = [];
  for (let i = 0; i < one.length; i++) {
    result.push(one[i]);
    result.push(two[i]);
    result.push(three[i]);
  }
  return result.join("");
}
