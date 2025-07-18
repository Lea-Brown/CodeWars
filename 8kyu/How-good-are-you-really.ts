/* 8 kyu
How good are you really?

https://www.codewars.com/kata/5601409514fc93442500010b/typescript

There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return (
    yourPoints >
    classPoints.reduce((acc, add) => acc + add, 0) / classPoints.length
  );
}
