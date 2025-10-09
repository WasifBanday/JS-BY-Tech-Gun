// Object

let person = {
    FirstName: "Wasif",
    LastName: "Banday",
    height: 5.9,
};

// whole object print
console.log(person)

// Acessing/printing  property of an object
console.log(person.LastName)
console.log(person['FirstName'])

// If the property does not exist in an object and trying to console it the reuslt will be 'undefined'
// 2 ways
console.log(person.age) // undefined
console.log('hair-color' in person) // false   (used in if-else statements)

// changing some property of an object 
person.height = 6.0;
console.log(person.height)

// How to add new property in object
person.age = 20;
console.log(person.age)


// How to delete property in an object
// Use key_word : delete
delete person.LastName
console.log(person)