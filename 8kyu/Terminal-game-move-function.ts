/* 8 kyu
Grasshopper - Terminal game move function

https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/typescript

In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

export const move = (pos: number, roll: number): number => pos + roll * 2;
