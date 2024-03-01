/* 7kyu
Isograms 

https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
*/

function isIsogram(str) {
  str = str.toLowerCase();
  let newArr = [];
  new Set(str).forEach((x) => {
    newArr.push(x);
  });
  newArr = newArr.join("");
  return newArr === str;
}
