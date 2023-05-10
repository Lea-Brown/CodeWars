/* 7 kyu
Race Ceremony

https://www.codewars.com/kata/62cecd4e5487c10028996e04/javascript

Parameters:
The function racePodium accepts one parameter, blocks, which represents the number of blocks available for constructing a podium.

Return:
The function returns an array of three numbers representing the positions of the top three racers on the podium. The numbers in the array indicate the racer's position, with the first element being the racer in the second position, the second element being the racer in the first position, and the third element being the racer in the third position.

Examples:
Calling racePodium(6) should return [2, 3, 1]. In this case, there are only enough blocks for the racers to assume their default positions (2nd, 3rd, 1st).
Calling racePodium(10) should return [2, 4, 1]. Here, additional blocks are available, allowing the racer in the second position to move up to the fourth position on the podium.
An edge case could be calling racePodium(0). Since there are no blocks available, the racers would remain in their default positions, and the function should return [2, 3, 1].

Pseudocode:
Initialize variables one, two, and three to 3, 2, and 1 respectively.
Subtract 6 from the blocks parameter.
Enter a while loop with the condition blocks > 0.
Inside the loop, use conditional statements to check the conditions for repositioning the racers:
a. If one - two is greater than 1, increment the two variable by 1.
b. If two - three is greater than 2, or (two - three is greater than 1 and blocks is equal to 1), increment the three variable by 1.
c. Otherwise, increment the one variable by 1.
d. Decrement the blocks variable by 1.
Return an array [two, one, three] representing the final positions of the racers on the podium.
*/

function racePodium(blocks) {
	let one = 3,
		two = 2,
		three = 1;
	blocks -= 6;

	while (blocks > 0) {
		if (one - two > 1) {
			two += 1;
		} else if (two - three > 2 || (two - three > 1 && blocks == 1)) {
			three += 1;
		} else {
			one += 1;
		}
		blocks -= 1;
	}

	return [two, one, three];
}

// refractored and comments added by chat gpt

function racePodium(blocks) {
	// Initialize podium positions
	let podium = [2, 3, 1];

	// Deduct initial blocks for starting positions
	blocks -= 6;

	// Calculate podium positions based on remaining blocks
	while (blocks > 0) {
		if (podium[0] - podium[1] > 1) {
			// If the first place is ahead by more than 1 position, move the second place up
			podium[1]++;
		} else if (podium[1] - podium[2] > 2 || (podium[1] - podium[2] > 1 && blocks === 1)) {
			// If the second place is ahead by more than 2 positions, or ahead by 1 position with only 1 block remaining,
			// move the third place up
			podium[2]++;
		} else {
			// Otherwise, move the first place up
			podium[0]++;
		}
		blocks--; // Decrease the number of remaining blocks
	}

	return podium; // Return the final podium positions
}
