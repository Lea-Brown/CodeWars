/* 7 kyu
Training JS #37: Unlock new weapon---RegExp Object

https://www.codewars.com/kata/5735e39313c205fe39001173/javascript

Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.

Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]
*/

function countAnimals(animals, count) {
  let result = Array(count.length).fill(0);
  let newArr = animals.split(',');
  for (let a = 0; a < count.length; a++) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === count[a]) {
        result[a]++;
      }
    }
  }
  return result;
}
