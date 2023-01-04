/* 6 kyu
What century is it?

https://www.codewars.com/kata/52fb87703c1351ebd200081f

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year) {

    function century() {
        if (Number(year.slice(-2)) > 0) return Number(year.slice(0, 2)) + 1;
        return Number(year.slice(0, 2));
    };

    function letter() {
        let date = century().toString();
        if (date[1] === '1' && date != '11') return "st";
        if (date[1] === '2' && date != '12') return "nd";
        if (date[1] === '3' && date != '13') return "rd";
        return 'th';
    };

    return `${century()}${letter()}`;
}