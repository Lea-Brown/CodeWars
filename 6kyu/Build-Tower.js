/* 6 kyu
Build Tower

https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

DESCRIPTION:
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  let arr = [];
  let starCount = nFloors + (nFloors - 1);
  let padEnds = 0;

  for (let i = nFloors; i > 0; i--) {
    arr.unshift(`${(' ').repeat(padEnds)}${('*').repeat(starCount)}${(' ').repeat(padEnds)}`)
    starCount -= 2
    padEnds++
  }

  return arr
}