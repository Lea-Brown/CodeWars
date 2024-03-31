/* 8 kyu
Rock Paper Scissors!

https://www.codewars.com/kata/5672a98bdbdd995fad00000f/go

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

package kata

func Rps(p1, p2 string) string {
  if p1 == p2 {
    return "Draw!"
  } else if p1 == "rock" && p2 == "scissors" {
    return "Player 1 won!"
  } else if p1 == "scissors" && p2 == "paper" {
    return "Player 1 won!"
  } else if p1 == "paper" && p2 == "rock" {
    return "Player 1 won!"
  } else {
    return "Player 2 won!"
  }
}

// chatGPT refractored

package kata

func Rps(p1, p2 string) string {
	wins := map[string]string{
		"rock":     "scissors",
		"scissors": "paper",
		"paper":    "rock",
	}

	if p1 == p2 {
		return "Draw!"
	}

	if wins[p1] == p2 {
		return "Player 1 won!"
	}

	return "Player 2 won!"
}
