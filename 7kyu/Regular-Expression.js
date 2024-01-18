/* 7 kyu
Training JS #38: Regular Expression--"^","$", "." and test()

https://www.codewars.com/kata/573975d3ac3eec695b0013e0/javascript

Coding in function findSimilarity. function accept two parameters: str, a sentence contains some words, separated by spaces; word, a sample word.

Your task is to keep the words that are similar to the sample word, and to remove the other words.

The similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Examples
findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""
Hint: Use filter() will make your work easier; If you don't know how to solve the kata, please refer to the examples of lesson.
*/

// I didn't use regex

function findSimilarity(str, word) {
  return str
    .split(' ')
    .filter(e => {
      return (
        e.length == word.length &&
        e[0] == word[0] &&
        e[e.length - 1] == word[word.length - 1]
      );
    })
    .join(' ');
}
