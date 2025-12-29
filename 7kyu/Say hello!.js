/**
 * 7 kyu
 * Say hello!
 * https://www.codewars.com/kata/55955a48a4e9c1a77500005a/javascript
 *
 * Returns a greeting for the given name.
 * If no name is provided (or it is falsy), the function returns null.
 *
 * @param {string} name - The name to greet.
 * @return {string|null} A greeting message, or null if no name is provided.
 *
 * @example
 * greet("Sam") // "hello Sam!"
 * greet("") // null
 * greet(null) // null
 */
function greet(name) {
  return name ? `hello ${name}!` : null;
}
