/* 8 kyu
Basic subclasses - Adam and Eve

https://www.codewars.com/kata/547274e24481cfc469000416/javascript

According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
*/

class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Man extends Human {
  constructor(name) {
    super(name, "male");
  }
}

class Woman extends Human {
  constructor(name) {
    super(name, "female");
  }
}

class God {
  static create() {
    const adam = new Man("Adam");
    const eve = new Woman("Eve");
    return [adam, eve];
  }
}
