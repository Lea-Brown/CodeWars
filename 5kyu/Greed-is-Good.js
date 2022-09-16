/* 5 kyu
Greed is Good

https://www.codewars.com/kata/5270d0d18625160ada0000e4/javascript

DESCRIPTION:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

// this is so messy :( I bet there is a super simple way of doing this.
function score(dice) {
    //how many of each number
    let one = dice.filter(x => x == 1).length;
    let two = dice.filter(x => x == 2).length;
    let three = dice.filter(x => x == 3).length;
    let four = dice.filter(x => x == 4).length;
    let five = dice.filter(x => x == 5).length;
    let six = dice.filter(x => x == 6).length;

    let result = 0;
    // one
    if (one >= 3) {
        result += 1000
        one -= 3
    }
    if (one === 2) {
        result += 200
        one -= 2
    }
    if (one == 1) { result += 100 }
    // two
    if (two >= 3) { result += 200 }
    // three
    if (three >= 3) { result += 300 }
    // four
    if (four >= 3) { result += 400 }
    // five
    if (five >= 3) {
        result += 500
        five -= 3
    }
    if (five === 2) {
        result += 100
        five -= 2
    }
    if (five == 1) { result += 50 }
    // six
    if (six >= 3) { result += 600 }
    // result
    return result;
}