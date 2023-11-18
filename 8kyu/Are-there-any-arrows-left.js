/* 8 kyu
Are there any arrows left?

https://www.codewars.com/kata/559f860f8c0d6c7784000119

You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.
*/

function anyArrows(arrows) {
  return arrows.some(x => !Object.values(x).includes(true));
}
