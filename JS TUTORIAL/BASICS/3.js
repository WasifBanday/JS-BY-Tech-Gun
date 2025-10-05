/* Functions to interact with the user : alert , prompt an function 

1. alert() - shows a massege .

2. prompt () - shows a massege input text . It returns the next on ok or , if cancel button or ESC is clicked , null

3. confirm () - shows a massege  confirm with "OK" or "cancel" . It returns true for ok false for cancel/esc .

Note : All these pause script execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed . 

*/


//  alert
// alert("Continue !")


// prompt 
// let age = prompt('Enter your age ', 20) // storing age taken from input
//     // 20 : is for default 

// if (age != null) {
//     document.write(`Your age is: ${age}`)
// } else {
//     document.write('Age Field was Blank')
// }


// confirm
let response = confirm('Are you sure , You want to delete ?')
if (response) {
    document.write("Deleted");
} else {
    document.write('Not Deleted')
}