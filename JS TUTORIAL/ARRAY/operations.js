// Operations on array

// 1. find length of an array
let books = ["Math", "Physics", "Urdu", "kashmiri", "sanskrit", "Bio", "Chemistry"];
console.log(books.length)

// 2. Adding new element at last in an array
books.push("English")
console.log(books)

// 3. Adding new element at first/starting in an array
books.unshift("Hindi")
console.log(books)

// 4. Deleting last 2 elements in an array  ( Using pop() Function) 
books.pop() // Engish hatgya
books.pop() // chemistry hatgya
console.log(books)

// 5. Deleting first 2 elements in an array  ( Using shift() Function)
books.shift() // Hindi hatgya
books.shift() // Math hatgya
console.log(books)

// 6. Deleting elements at any place in an array
books.splice(1, 2) // Urdu aur kashmiri hatt jayaega (1 se 2 tak waley hateingey )
console.log(books)

// 7. Find position of any element in an array
let position = books.indexOf('Bio')
console.log(position)

// 8. How to check if the data is array or not 
let book = 'math'
console.log(Array.isArray(book)) // False 
console.log(Array.isArray(books)) // True



// 9. Array empty karna
books = [];
// books.length = 0
console.log(books)