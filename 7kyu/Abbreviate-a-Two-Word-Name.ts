/* 8 kyu
Abbreviate a Two Word Name

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/typescript

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

export function abbrevName(name: string): string {
  const temp: string[] = name.split(" ");
  return `${temp[0][0].toUpperCase()}.${temp[1][0].toUpperCase()}`;
}
