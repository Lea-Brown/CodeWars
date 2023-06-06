/* 8 kyu
Grasshopper - Terminal game combat function

https://www.codewars.com/kata/586c1cf4b98de0399300001d/javascript

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}
