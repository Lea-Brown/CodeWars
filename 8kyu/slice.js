/* 8 kyu
Training JS #16: Methods of String object--slice(), substring() and substr()

https://www.codewars.com/kata/57274562c8dcebe77e001012/javascript

Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
*/

function cutIt(arr) {
  let short = [...arr].sort((a, b) => a.length - b.length)[0].length;
  return arr.map(e => e.slice(0, short));
}
