// 9. how to make string an array and its each word as element in an array

let text = 'This is me wasif '
let wordarray = text.split(' '); // Jahan space dekhey wahan alag alag element bnadoh
console.log(wordarray)

// 10. How to make array as an string 
let book = ["Math", "Physics", "Bio", "Chemistry", "12"];
let stringarray = book.join(' ') // Jahan space dekhey wahan jodhdohh
console.log(stringarray)

// 11. How to join arrays as one
let book1 = ["Physics", "Bio", "Chemistry"];
let book2 = ["French", "computer", "history"]
let book3 = ["punjabi", "urdu"];
let newbook = book1.concat(book2, book3) // book1 mai book2 aur book3 to ko b add krdo
console.log(newbook)