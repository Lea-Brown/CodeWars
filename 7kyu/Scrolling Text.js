/**
 * 7 kyu
 * Scrolling Text
 * https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/javascript
 *
 * Converts a string to uppercase and returns an array of strings
 * with each successive character moved from the start to the end.
 *
 * @param {string} text - The string to transform.
 * @returns {string[]} An array containing each rotation of the string.
 *
 * @example
 * scrollingText('abc');
 * // Returns: ['ABC', 'BCA', 'CAB']
 *
 * @example
 * scrollingText('hello');
 * // Returns: ['HELLO', 'ELLOH', 'LLOHE', 'LOHEL', 'OHELL']
 *
 * @example
 * scrollingText('a');
 * // Returns: ['A']
 */
function scrollingText(text) {
  text = text.toUpperCase();
  let result = [text];
  for (let i = 0; i < text.length - 1; i++) {
    text = text.slice(1) + text.slice(0, 1);
    result.push(text);
  }
  return result;
}
