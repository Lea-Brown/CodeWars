/**
 * 7 kyu
 * Sort with Arrow Functions
 * https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/javascript
 *
 * Sorts an array of people by age in ascending order.
 *
 * @param {{ age: number }[]} people - An array of people objects.
 * @returns {{ age: number }[]} The people sorted from youngest to oldest.
 *
 * @example
 * OrderPeople([{ age: 30 }, { age: 20 }, { age: 25 }]);
 * // Returns: [{ age: 20 }, { age: 25 }, { age: 30 }]
 *
 * @example
 * OrderPeople([{ age: 45 }, { age: 18 }, { age: 60 }]);
 * // Returns: [{ age: 18 }, { age: 45 }, { age: 60 }]
 *
 * @example
 * OrderPeople([{ age: 22 }, { age: 22 }, { age: 19 }]);
 * // Returns: [{ age: 19 }, { age: 22 }, { age: 22 }]
 */
const OrderPeople = (people) => people.sort((a, b) => a.age - b.age);
