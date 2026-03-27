/**
 * 6 kyu
 * Coding Meetup #10 - Higher-Order Functions Series - Create usernames
 * https://www.codewars.com/kata/582a53ed261c2af9d200018c/javascript
 *
 * Adds a `username` property to each person in the list.
 *
 * The username is generated as:
 *   - Lowercase first name
 *   - Lowercase first letter of last name
 *   - Year of birth (current year - age)
 *
 * Example: { firstName: "John", lastName: "Doe", age: 30 }
 *          -> username: "jdoe1996" (if current year is 2026)
 *
 * @param {Array<Object>} list - Array of person objects. Each object should have:
 *   @param {string} firstName - Person's first name
 *   @param {string} lastName - Person's last name
 *   @param {number} age - Person's age
 * @returns {Array<Object>} The same array with a new `username` property added to each object
 */

function addUsername(list) {
  const date = new Date().getFullYear();
  for (const person of list) {
    const first = person.firstName.toLowerCase();
    const second = person.lastName[0].toLowerCase();
    const dob = date - person.age;
    const username = `${first}${second}${dob}`;
    person["username"] = username;
  }
  return list;
}
