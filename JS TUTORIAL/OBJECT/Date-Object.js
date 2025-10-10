let x = new Date(); // Date of your computer
console.log(x)
    //  if we want to customize our date we have to pass 7 parameters 
    // let syntax = new Date(year, month, day, hour, minute, Second, mili - second)
    // Minimum we have to give year and month 
let dt = new Date(2024, 0, 12, 11, 32, 23, 3)
console.log(dt) // Month starts from 0 in J-S ( 0--> january)

// We can pass parameters as a string as well
let str = new Date("june 12,2023 11:12:22")
console.log(str)
console.log(str.getTime()) // The computer stores mili-seconds from 1970 to the date we provided .