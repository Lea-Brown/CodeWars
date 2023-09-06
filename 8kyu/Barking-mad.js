/* 8 kyu
Barking mad

https://www.codewars.com/kata/54dba07f03e88a4cec000caf/javascript

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/

class Dog {
  constuctor(breed) {
    this.breed = breed;
  }

  bark() {
    return 'Woof';
  }
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');
