/* 6 kyu
Consonant value

https://www.codewars.com/kata/59c633e7dcc4053512000073/typescript

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

"zodiac" -> 26
The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

"strength" -> 57
The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

export function solve(s: string) {
  const vowels: { [key: string]: boolean } = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let result: number = 0;
  let current: number = 0;
  for (const each of s) {
    if (vowels[each]) {
      if (current > result) result = current;
      current = 0;
      continue;
    }
    current += each.charCodeAt(0) - 96;
  }
  return Math.max(result, current);
}
