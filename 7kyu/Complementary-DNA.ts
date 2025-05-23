/* 7 kyu
Complementary DNA

https://www.codewars.com/kata/554e4a2f232cdd87d9000038/typescript

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

export class Kata {
  static dnaStrand(dna: string) {
    let result: string[] = [];
    for (let i = 0; i < dna.length; i++) {
      dna[i] === "A"
        ? result.push("T")
        : dna[i] === "T"
        ? result.push("A")
        : dna[i] === "C"
        ? result.push("G")
        : result.push("C");
    }
    return result.join("");
  }
}
