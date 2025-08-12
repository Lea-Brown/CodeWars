/* 8 kyu
Is it a palindrome?

https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/typescript

e a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

export function isPalindrome(x: string): boolean {
  x = x.toLowerCase();
  return x === x.split("").reverse().join("");
}
