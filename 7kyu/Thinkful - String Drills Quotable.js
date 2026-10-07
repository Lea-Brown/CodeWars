/**
 * 7 kyu
 * Thinkful - String Drills: Quotable
 * https://www.codewars.com/kata/5859c82bd41fc6207900007a/javascript
 *
 * Creates a string containing a person's name and quote.
 *
 * @param {string} name - The name of the person.
 * @param {string} quote - The quote spoken by the person.
 * @returns {string} The formatted name and quote.
 *
 * @example
 * quotable("Alice", "Hello, world!");
 * // "Alice said: \"Hello, world!\""
 *
 * @example
 * quotable("Bob", "Keep learning.");
 * // "Bob said: \"Keep learning.\""
 *
 * @example
 * quotable("Charlie", "JavaScript is fun!");
 * // "Charlie said: \"JavaScript is fun!\""
 */
const quotable = (name, quote) => `${name} said: "${quote}"`;
