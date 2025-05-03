/* 6 kyu
Build Tower

https://www.codewars.com/kata/576757b1df89ecf5bd00073b/typescript

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

export const towerBuilder = (nFloors: number): string[] => {
  let result: string[] = [];
  let stars: number = 1;
  let spaces: number = nFloors - 1;
  for (let i = 0; i < nFloors; i++) {
    result.push(
      `${" ".repeat(spaces)}${"*".repeat(stars)}${" ".repeat(spaces)}`
    );
    stars += 2;
    spaces -= 1;
  }
  return result;
};
