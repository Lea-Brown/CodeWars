/* 6 kyu
Extract Nested Object Reference

https://www.codewars.com/kata/527a6e602a7db3456e000a2b/javascript

You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

// Written by chat gpt

// Define the hash method on the Object prototype
Object.prototype.hash = function (path) {
	// Split the path into individual property names
	const properties = path.split('.');
	// Start with the current object as the root
	let currentObj = this;
	// Traverse the properties, accessing nested objects along the way
	for (let i = 0; i < properties.length; i++) {
		// Check if the current property exists in the object
		if (currentObj && currentObj.hasOwnProperty(properties[i])) {
			// Update the current object to the nested property
			currentObj = currentObj[properties[i]];
		} else {
			// Return undefined if any intermediate property doesn't exist
			return undefined;
		}
	}
	// Return the final value at the end of the path
	return currentObj;
};
