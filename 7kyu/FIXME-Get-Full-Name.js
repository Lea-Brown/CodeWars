/* 7 kyu
FIXME: Get Full Name

https://www.codewars.com/kata/597c684822bc9388f600010f/javascript

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

class Dinglemouse {
    constructor(firstName, lastName) {
        this.first = firstName;
        this.last = lastName;
    }
    getFullName() {
        return this.last.length == 0 ? `${this.first}`
            : this.first.length == 0 ? `${this.last}`
                : `${this.first} ${this.last}`
    }
}