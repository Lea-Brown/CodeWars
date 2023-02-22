/* 7 kyu
Return the Missing Element

https://www.codewars.com/kata/5299413901337c637e000004/javascript

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

function getMissingElement(superImportantArray) {
    superImportantArray.sort((a, b) => a - b)
    for (let i = 0; i < superImportantArray.length; i++) {
        if (superImportantArray[0] != 0) return 0
        if (superImportantArray[i] + 1 != superImportantArray[i + 1]) return superImportantArray[i] + 1
    }
}

function getMissingElement(superImportantArray) {
    superImportantArray.sort((a, b) => a - b);
    if (superImportantArray[0] != 0) return 0;
    if (superImportantArray[1] != 1) return 1;
    if (superImportantArray[2] != 2) return 2;
    if (superImportantArray[3] != 3) return 3;
    if (superImportantArray[4] != 4) return 4;
    if (superImportantArray[5] != 5) return 5;
    if (superImportantArray[6] != 6) return 6;
    if (superImportantArray[7] != 7) return 7;
    if (superImportantArray[8] != 8) return 8;
    if (superImportantArray[9] != 9) return 9;
}