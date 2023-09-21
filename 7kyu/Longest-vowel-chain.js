/* 7 kyu
Longest vowel chain

https://www.codewars.com/kata/59c5f4e9d751df43cf000035/javascript

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

function solve(s) {
  let result = 0;
  let running = 0;
  const vowels = 'aeiou';
  s.split('').forEach(e => {
    if (vowels.includes(e)) {
      running += 1;
    } else {
      if (running > result) result = running;
      running = 0;
    }
  });
  return result;
}
