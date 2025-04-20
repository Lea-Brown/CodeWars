/* 5 kyu
Simple Pig Latin

https://www.codewars.com/kata/520b9d2ad5c005041100000f/typescript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

export const pigIt = (a: string): string => {
  let result: string[] = [];
  const punctuation: string = "!.?";
  a.split(" ").forEach((e) => {
    if (!punctuation.includes(e)) {
      result.push(`${e.slice(1)}${e[0]}${"ay"}`);
    } else {
      result.push(e);
    }
  });
  return result.join(" ");
};
