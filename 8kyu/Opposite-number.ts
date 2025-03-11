/* 8 kyu
Opposite number

https://www.codewars.com/kata/56dec885c54a926dcd001095/train/typescript

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34
*/

export class Kata {
  static opposite(n: number) {
    return -n;
  }
}
