/* 7 kyu
Disemvowel Trolls

https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

export class Kata {
  static disemvowel(str: string): string {
    let result: string[] = [];
    const vowels: string = "aeiouAEIOU";
    for (const each of str) {
      if (!vowels.includes(each)) result.push(each);
    }
    return result.join("");
  }
}
