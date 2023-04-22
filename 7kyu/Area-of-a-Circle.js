/* 7 kyu
Area of a Circle

https://www.codewars.com/kata/537baa6f8f4b300b5900106c/javascript

Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false
*/

const circleArea = (radius) => {
  return typeof radius == "string"
    ? false
    : radius <= 0
    ? false
    : +(Math.PI * radius ** 2).toFixed(2);
};
