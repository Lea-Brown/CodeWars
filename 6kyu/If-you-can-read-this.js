/* 6 kyu
If you can read this...

https://www.codewars.com/kata/586538146b56991861000293/javascript

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(words) {
    let nato = {
        'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie',
        'D': 'Delta', 'E': 'Echo', 'F': 'Foxtrot',
        'G': 'Golf', 'H': 'Hotel', 'I': 'India',
        'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima',
        'M': 'Mike', 'N': 'November', 'O': 'Oscar',
        'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo',
        'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform',
        'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray',
        'Y': 'Yankee', 'Z': 'Zulu', '!': '!',
        '.': '.', '?': '?'
    };

    let result = [];
    words.toUpperCase().split('').forEach(e => {
        if (nato[e] != undefined) result.push(nato[e]);
    })
    return result.join(' ');
}