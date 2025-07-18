/* 8 kyu
Are You Playing Banjo?

https://www.codewars.com/kata/53af2b8861023f1d88000832/typescript

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

export function areYouPlayingBanjo(name: string): string {
  if (name[0] == "R" || name[0] === "r") return `${name} plays banjo`;
  return `${name} does not play banjo`;
}
