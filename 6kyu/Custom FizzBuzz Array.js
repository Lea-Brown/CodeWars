/**
 * 6 kyu
 * Custom FizzBuzz Array
 * https://www.codewars.com/kata/5355a811a93a501adf000ab7/javascript
 *
 * Generates a customised FizzBuzz sequence from 1 to 100.
 *
 * For each number, checks divisibility against two divisors and
 * appends the matching word(s). If neither divisor matches, the
 * number itself is used.
 *
 * @param {string} [word1="Fizz"] - Word to use when a number is divisible by num1.
 * @param {string} [word2="Buzz"] - Word to use when a number is divisible by num2.
 * @param {number} [num1=3] - First divisor to check.
 * @param {number} [num2=5] - Second divisor to check.
 * @returns {(string|number)[]} An array of 100 items: words, combined words, or numbers.
 *
 * @example
 * // Default FizzBuzz
 * fizzBuzzCustom();
 * // => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ...]
 *
 * @example
 * // Custom words, same divisors
 * fizzBuzzCustom("Ping", "Pong");
 * // => [1, 2, "Ping", 4, "Pong", "Ping", 7, ...]
 *
 * @example
 * // Custom words and divisors
 * fizzBuzzCustom("Odd", "High", 2, 10);
 * // => [1, "Odd", 3, "Odd", 5, "Odd", 7, "Odd", 9, "OddHigh", ...]
 */
function fizzBuzzCustom(word1 = "Fizz", word2 = "Buzz", num1 = 3, num2 = 5) {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let value = "";
    if (i % num1 === 0) value += word1;
    if (i % num2 === 0) value += word2;
    result.push(value || i);
  }
  return result;
}
