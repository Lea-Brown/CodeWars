/* 6 kyu
Make the Deadfish Swim

https://www.codewars.com/kata/51e0007c1f9378fa810002a9/javascript

DESCRIPTION:
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse(data) {
    let count = 0;
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] == 'i' || data[i] == 'd' || data[i] == 's' || data[i] == 'o') {
            switch (data[i]) {
                case 'i':
                    count++;
                    break;
                case 'd':
                    count--;
                    break;
                case 's':
                    count = count ** 2;
                    break;
                case 'o':
                    result.push(count);
                    break;
            }
        }
    }
    return result
}