/* 8 kyu
Kata Example Twist

https://www.codewars.com/kata/525c1a07bb6dda6944000031/javascript

This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.
*/

const websites = Array.from(Array(1000)).map(e => (e = 'codewars'));
