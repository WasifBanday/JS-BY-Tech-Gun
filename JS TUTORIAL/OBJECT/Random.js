// How to generate Random number in js 'using Math Method'

let x = Math.random(); // Generates number between 0 - 1 ....
console.log(x)

// How to generate Random number between 1-10
let y = Math.floor(Math.random() * 10) + 1; // Generates number between 1 - 10 ....
console.log(y)

// How to customize this random number in any range 
// example  : Generate between 15-24
let z = Math.floor(Math.random() * (25 - 15) + 15)
console.log(z)

// Lets do it with Function 
function getRandom(min, max) {
    let z = Math.floor(Math.random() * (max - min) + min)
    return z;
}
console.log(getRandom(10, 20))