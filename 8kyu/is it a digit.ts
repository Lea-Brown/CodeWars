/* 8 kyu
Regexp Basics - is it a digit?

https://www.codewars.com/kata/567bf4f7ee34510f69000032/typescript

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a single digit (0-9), false otherwise.
*/

interface String {
  // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  if (this.toString().length > 1) return false;
  return /[0-9]/.test(this.toString());
};
