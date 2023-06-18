/* 8 kyu
Surface Area and Volume of a Box

https://www.codewars.com/kata/565f5825379664a26b00007c/javascript

Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth) {
  return [
    2 * (depth * width + width * height + height * depth), // area
    height * width * depth, // volume
  ];
}
