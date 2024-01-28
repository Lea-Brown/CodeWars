/* 7 kyu
Sort by Last Char

https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/javascript

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

function last(x) {
  const wordsArray = x.split(' ');

  wordsArray.sort((a, b) => {
    const lastCharA = a.charAt(a.length - 1);
    const lastCharB = b.charAt(b.length - 1);

    if (lastCharA < lastCharB) {
      return -1;
    } else if (lastCharA > lastCharB) {
      return 1;
    } else {
      return 0;
    }
  });

  return wordsArray;
}
