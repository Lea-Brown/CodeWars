/* 6 kyu
Begin your day with a challenge, but an easy one.

https://www.codewars.com/kata/5873b2010565844b9100026d

There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:

one_two_three(0) == [0, 0]
one_two_three(1) == [1, 1]
one_two_three(2) == [2, 11]
one_two_three(3) == [3, 111]
one_two_three(19) == [991, 1111111111111111111]
And it should give the following results in Javascript, Scala, D, Go, and Rust:

oneTwoThree(0) == ['0', '0']
oneTwoThree(1) == ['1', '1']
oneTwoThree(3) == ['3', '111']
oneTwoThree(19) == ['991', '1111111111111111111']
In C, the results are to be assigned to seperate pointers.
*/

function oneTwoThree(n) {
  if (n == 0) return ['0', '0'];
  let long = Array(n).fill('1').join('');
  let short = '';
  let x = long.length;
  while (x > 0) {
    if (x > 9) {
      short += '9';
      x -= 9;
    } else {
      short += x.toString();
      x -= x;
    }
  }
  return [short, long];
}
