/* 7 kyu
Simple Fun #30: Strings Construction

https://www.codewars.com/kata/58870402c81516bbdb000088/javascript

How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output
[input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.

[input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.

[output] an integer
*/

function stringsConstruction(A, B) {
  let a = [...new Set([...A])];
  let count = -1;
  let arrA = [...A];
  let arrB = [...B];

  a.forEach(e => {
    let letterA = arrA.filter(x => e == x).length;
    let letterB = arrB.filter(x => e == x).length;
    if (count == -1 || letterB / letterA < count)
      count = Math.floor(letterB / letterA);
  });

  return count;
}
