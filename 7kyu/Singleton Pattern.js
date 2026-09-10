/**
 * 7 kyu
 * Singleton Pattern
 * https://www.codewars.com/kata/534fcca5edb124cfe6000f60/javascript
 *
 * Creates a Singleton object.
 *
 * Ensures that only one instance of Singleton exists.
 *
 * @constructor
 *
 * @example
 * const obj1 = new Singleton();
 * const obj2 = new Singleton();
 * console.log(obj1 === obj2); // true
 *
 * @example
 * const obj1 = new Singleton();
 * obj1.test = 1;
 * const obj2 = new Singleton();
 * console.log(obj2.test); // 1
 *
 * @example
 * const obj1 = new Singleton();
 * console.log(Singleton.instance === obj1); // true
 */
function Singleton() {
  if (Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  return this;
}
