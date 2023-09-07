/* 8 kyu
Exclamation marks series #2: Remove all exclamation marks from the end of sentence

https://www.codewars.com/kata/57faece99610ced690000165/javascript

Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove(string) {
  let rev = string.split('').reverse();
  for (let i = 0; i < rev.length; i++) {
    if (rev[i] != '!') return rev.reverse().join('');
    if (rev[i] == '!') rev[i] = '';
  }
}
