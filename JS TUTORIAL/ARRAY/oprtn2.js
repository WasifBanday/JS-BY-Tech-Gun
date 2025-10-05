// 10. how to turn string into array and its each word into element in an array ?
let text = 'This is me wasif '
let wordarray = text.split(' '); // Jahan space dikhi wahan alag alag element bnadoh
console.log(wordarray)

// 11. How to turn array into string ?
let book = ["Math", "Physics", "Bio", "Chemistry", "12"];
let stringarray = book.join(' ') // Jahan space dekhey wahan jodhdohh
console.log(stringarray)

// 12. How to join arrays ?
let book1 = ["Physics", "Bio", "Chemistry"];
let book2 = ["French", "computer", "history"]
let book3 = ["punjabi", "urdu"];
let newbook = book1.concat(book2, book3) // book1 mai book2 aur book3 to ko b add krdo
console.log(newbook)