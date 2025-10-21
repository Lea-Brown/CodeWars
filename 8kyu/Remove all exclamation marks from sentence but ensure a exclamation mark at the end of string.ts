/**
 *8 kyu
 *Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
 *
 *https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/typescript
 *
 * Removes all exclamation marks from a string, then adds one at the end.
 *
 * @param s - The input string.
 * @returns A string ending with a single exclamation mark.
 *
 * @example
 * remove("hi! hi!") // "hi hi!"
 * remove("hi!!!")   // "hi!"
 * remove("hi")      // "hi!"
 */

export function remove(s: string): string {
  const result: string[] = [];
  for (const each of s) {
    if (each !== "!") result.push(each);
  }
  result.push("!");
  return result.join("");
}
