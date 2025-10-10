// How to compare dates 
let x = new Date("June 13 , 2026 11:20:33")
let y = new Date(); // means present / todays date 

if (y > x) {
    console.log('x is past Date ')
} else if (x > y) {
    console.log('x is future date')
} else {
    console.log('x is same date')
}