/**
 * 7 kyu
 * Interactive Dictionary
 * https://www.codewars.com/kata/57a93f93bb9944516d0000c1/javascript
 *
 * A simple dictionary for storing key-value pairs.
 */
class Dictionary {
  /**
   * Adds a key-value pair to the dictionary.
   *
   * @param {string} key - The key to add.
   * @param {*} value - The value to associate with the key.
   */
  newEntry(key, value) {
    this[key] = value;
  }

  /**
   * Returns the value associated with a key.
   *
   * @param {string} key - The key to look up.
   * @returns {*} The value, or an error message if the key does not exist.
   */
  look(key) {
    return key in this ? this[key] : `Can't find entry for ${key}`;
  }
}
