/* 6 kyu
Playing with passphrases

https://www.codewars.com/kata/559536379512a64472000053/javascript

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?
*/

function playPass(s, n) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (letters.indexOf(s[i]) >= 0) s[i] = letters.charAt(letters.indexOf(s[i]) + n)
        if (i % 2 != 0) s[i] = s[i].toLowerCase()
        if (numbers.indexOf(s[i]) >= 0) s[i] = Math.abs(Number(s[i] - 9))
    }
    return s.slice().reverse().join('')
}