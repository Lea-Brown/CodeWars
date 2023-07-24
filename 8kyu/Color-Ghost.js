/* 8 kyu
Color Ghost

https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/javascript

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
  constructor(color) {
    this.color = ['white', 'yellow', 'purple', 'red'][
      Math.floor(Math.random() * 4)
    ];
  }
}
