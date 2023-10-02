/* 7 kyu
Initialize my name

https://www.codewars.com/kata/5768a693a3205e1cc100071f

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
  if (name.split(' ').length <= 2) return name;
  let result = [];
  name.split(' ').forEach((e, i) => {
    if (i == 0) {
      result.push(e);
    } else if (i == name.split(' ').length - 1) {
      result.push(e);
    } else {
      result.push(`${e[0]}.`);
    }
  });
  return result.join(' ');
}
