/**
 * 7 kyu
 * Email Address Obfuscator
 * https://www.codewars.com/kata/562d8d4c434582007300004e/solutions/javascript
 *
 * [Obfuscate email](ca://s?q=Explain_email_obfuscation) — Replaces "@" and "." with readable text
 * to make the address less machine‑readable while still human‑readable.
 *
 * @param {string} email - The email address to obfuscate.
 * @returns {string} The obfuscated email string.
 *
 * @example
 * obfuscate("alice@example.com");
 * // "alice [at] example [dot] com"
 *
 * @example
 * obfuscate("first.last@domain.co.uk");
 * // "first [dot] last [at] domain [dot] co [dot] uk"
 */
const obfuscate = (email) =>
  email.split("@").join(" [at] ").split(".").join(" [dot] ");
