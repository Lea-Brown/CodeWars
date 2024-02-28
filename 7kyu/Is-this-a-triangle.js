/* 7kyu
Is this a triangle?

https://www.codewars.com/kata/56606694ec01347ce800001b/javascript 
*/
function isTriangle(a, b, c) {
  let numbers = [a, b, c];
  let highestToLowest = numbers.sort((a, b) => b - a);
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (highestToLowest[0] < highestToLowest[1] + highestToLowest[2]) {
    return true;
  } else {
    return false;
  }
}
