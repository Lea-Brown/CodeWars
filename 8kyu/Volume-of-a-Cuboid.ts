/* 8 kyu
Volume of a Cuboid

https://www.codewars.com/kata/58261acb22be6e2ed800003a/typescript

Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

Write a function to help Bob with this calculation.
*/

export function getVolumeOfCuboid(
  length: number,
  width: number,
  height: number
): number {
  return length * width * height;
}
