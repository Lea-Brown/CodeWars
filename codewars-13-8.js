/* 
Training JS #5: Basic data types--Object 8kyu

https://www.codewars.com/kata/571f1eb77e8954a812000837/javascript

Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
*/

function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

/*
Add property to every object in array 7kyu

https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/javascript

Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
*/

questions.forEach(x => x.usersAnswer = null);