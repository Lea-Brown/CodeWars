/* 6 kyu 
Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

https://www.codewars.com/kata/57fb44a12b53146fe1000136/javascript

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left, right) {
    let newLeft = ([...left].filter(e => e === '!').length * 2) + ([...left].filter(e => e === '?').length * 3)
    let newRight = ([...right].filter(e => e === '!').length * 2) + ([...right].filter(e => e === '?').length * 3)
    return newLeft > newRight ? 'Left' : newRight > newLeft ? 'Right' : 'Balance'
}