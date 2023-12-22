/* 8 kyu
Grasshopper - Terminal Game #1

 https://www.codewars.com/kata/55e8aba23d399a59500000ce/javascript

 In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
*/

class Hero {
  constructor(
    name = 'Hero',
    experience = 0,
    health = 100,
    position = '00',
    damage = 5
  ) {
    this.name = name;
    this.experience = experience;
    this.health = health;
    this.position = position;
    this.damage = damage;
  }
}
