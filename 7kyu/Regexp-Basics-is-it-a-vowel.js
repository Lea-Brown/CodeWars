/* 7 kyu
Regexp Basics - is it a vowel?

https://www.codewars.com/kata/567bed99ee3451292c000025/javascript

Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

String.prototype.vowel = function () {
    return this.length != 1 ? false : /[aeiou]/i.test(this);
}