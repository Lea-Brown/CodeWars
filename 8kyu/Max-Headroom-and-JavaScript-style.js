/* 8 kyu
Max Headroom and JavaScript style

https://www.codewars.com/kata/52a47dd7e950edabfa000391

Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?
*/

function getMax1() {
  return { name: 'Max Headroom' };
}

function getMax2() {
  return getMax1();
}
