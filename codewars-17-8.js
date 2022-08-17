/* A Needle in the Haystack 8kyu

https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript

DESCRIPTION:
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/

function findNeedle(haystack) {
    let needle;
    haystack.forEach((x, i) => {
        if (x === 'needle') {
            needle = i
        }
    })
    return `found the needle at position ${needle}`
}

// refactor

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

/* Remove the minimum 7kyu

https://www.codewars.com/kata/563cf89eb4747c5fb100001b/javascript

DESCRIPTION:
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
    let newArr = numbers.slice()
    let minNumbIndex = newArr.indexOf(Math.min(...newArr))
    newArr.splice(minNumbIndex, 1)
    return newArr;
}