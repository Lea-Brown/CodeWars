/* 8 kyu
Simple Fun #1: Seats in Theater

https://www.codewars.com/kata/588417e576933b0ec9000045/javascript

Input/Output
[input] integer nCols

An integer, the number of theater's columns.

Constraints: 1 ≤ nCols ≤ 1000.

[input] integer nRows

An integer, the number of theater's rows.

Constraints: 1 ≤ nRows ≤ 1000.

[input] integer col

An integer, the column number of your own seat (with the rightmost column having index 1).

Constraints: 1 ≤ col ≤ nCols.

[input] integer row

An integer, the row number of your own seat (with the front row having index 1).

Constraints: 1 ≤ row ≤ nRows.

[output] an integer
The number of people who sit strictly behind you and in your column or to the left.
*/

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}
