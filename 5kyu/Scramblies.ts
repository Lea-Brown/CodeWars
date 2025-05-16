/* 5 kyu
Scramblies

https://www.codewars.com/kata/55c04b4cc56a697bb0000048/typescript

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

export function scramble(str1: string, str2: string): boolean {
  let obj: { [key: string]: number } = {};
  for (const each of str1) {
    obj[each] = (obj[each] || 0) + 1;
  }
  for (const each of str2) {
    obj[each] = (obj[each] || 0) - 1;
    if (obj[each] === -1) return false;
  }
  return true;
}

// chatGPT for performance
export function scramble2(str1: string, str2: string): boolean {
  if (str2.length > str1.length) return false;

  const count = new Array(26).fill(0);
  const base = "a".charCodeAt(0);

  for (let i = 0; i < str1.length; i++) {
    count[str1.charCodeAt(i) - base]++;
  }

  for (let i = 0; i < str2.length; i++) {
    const index = str2.charCodeAt(i) - base;
    if (--count[index] < 0) return false;
  }

  return true;
}
