/* 8 kyu
Alan Partridge II - Apple Turnover

https://www.codewars.com/kata/580a094553bd9ec5d800007d/javascript

Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
*/

function apple(x) {
  return Math.abs(x) ** 2 > 1000
    ? "It's hotter than the sun!!"
    : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
