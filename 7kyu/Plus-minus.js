/* 7 kyu
Plus - minus - plus - plus - ... - Count

https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/

function catchSignChange(arr) {
  let count = 0;
  arr.forEach((e, i) => {
    if ((e >= 0 && arr[i - 1] < 0) || (e < 0 && arr[i - 1] >= 0)) count++;
  });
  return count;
}
