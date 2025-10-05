// Printing each book using for loop

let books = ["Math", "Physics", "Bio", "Chemistry"];
let bookLength = books.length; // length = 4

for (let i = 0; i < bookLength; i++) { // using less than (<) bookLength because indexing starts from 0 and length starts from 1

    console.log(`Element ${i+1} is ${books[i]}\n`)
};