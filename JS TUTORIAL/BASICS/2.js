// Double equal to 

5 == 5 // True (only value check)
5 === '5' // false (value and type check)

// ouble not equal to 

5 !== 5 // False ( only value check)
5 !== '5' // True ( value and type check)

let isLoggedin = 0;
let option = isLoggedin == 1 ? "Logout" : "Login"; // if else in short form
//                condition      true        false


let user;
//   user = 'Wasif'

alert(user ? ? "Guest user ") // it basically means if the user is not login give this alert (Guest user)JS