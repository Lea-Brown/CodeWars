/**
 * 7 kyu
 * Hello World - Without Strings
 * https://www.codewars.com/kata/584c7b1e2cb5e1a727000047/javascript
 *
 * Returns the string "Hello, World!" using character codes.
 *
 * @returns {string} The string "Hello, World!".
 *
 * @example
 * helloWorld();
 * // "Hello, World!"
 *
 * @example
 * const greeting = helloWorld();
 * console.log(greeting);
 * // "Hello, World!"
 *
 * @example
 * helloWorld().toUpperCase();
 * // "HELLO, WORLD!"
 */
const helloWorld = () =>
  String.fromCharCode(
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    87,
    111,
    114,
    108,
    100,
    33,
  );
