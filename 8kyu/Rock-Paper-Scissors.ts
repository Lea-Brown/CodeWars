/* 8 kyu
Rock Paper Scissors!

https://www.codewars.com/kata/5672a98bdbdd995fad00000f/typescript

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

export function rps(p1: string, p2: string): string {
  if (
    (p1 === "rock" && p2 == "scissors") ||
    (p1 === "paper" && p2 == "rock") ||
    (p1 === "scissors" && p2 == "paper")
  )
    return "Player 1 won!";
  if (
    (p2 === "rock" && p1 == "scissors") ||
    (p2 === "paper" && p1 == "rock") ||
    (p2 === "scissors" && p1 == "paper")
  )
    return "Player 2 won!";
  return "Draw!";
}
