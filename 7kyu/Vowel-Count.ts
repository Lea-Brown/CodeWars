/* 7 kyu
Vowel Count

https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

export class Kata {
  static getCount(str: string): number {
    let count: number = 0;
    let vowels: string = "aeiou";
    for (const each of str) {
      if (vowels.includes(each)) count++;
    }
    return count;
  }
}
