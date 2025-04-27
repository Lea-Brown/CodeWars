/* 6 kyu
Make the Deadfish Swim

https://www.codewars.com/kata/51e0007c1f9378fa810002a9/typescript

Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let result: number[] = [];
  let count: number = 0;
  for (const each of data) {
    if (each === "i") count++;
    if (each === "d") count--;
    if (each === "s") count = count ** 2;
    if (each === "o") result.push(count);
  }
  return result;
}
