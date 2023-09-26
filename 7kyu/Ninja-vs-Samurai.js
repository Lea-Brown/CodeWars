/* 7 kyu
Ninja vs Samurai: Strike

https://www.codewars.com/kata/517b0f33cd023d848d000001/javascript

Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
*/

class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  strike(enemy, swings) {
    enemy.health = Math.max(0, enemy.health - swings * 10);
  }
}
