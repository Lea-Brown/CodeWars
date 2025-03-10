/* 8 kyu
Remove First and Last Character

https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/typescript

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

export function removeChar(str: string): string {
  let result: string[] = [];
  for (let i = 1; i < str.length - 1; i++) {
    result.push(str[i]);
  }
  return result.join("");
}

// better
export function removeChar2(str: string): string {
  return str.slice(1, -1);
}
