/*Break camelCase 6kyu

https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');
}

/* Take a Ten Minutes Walk 6kyu

I'm a baddy and I write bad code. This needs cleaning up a lot.

https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript

DESCRIPTION:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let e = 0;
    let w = 0;

    if (walk.length === 10) {
        for (const element of walk) {
            if (element === 'n') {
                n++;
            }
        }
        for (const element of walk) {
            if (element === 's') {
                s++;
            }
        }

        for (const element of walk) {
            if (element === 'e') {
                e++;
            }
        }

        for (const element of walk) {
            if (element === 'w') {
                w++;
            }
        }

        if (n === s && e === w) {
            return true
        } else {
            return false
        }

    } else {
        return false
    }
}