// How to change any element in Date 
let x = new Date("june 21,2023 10:12:33")

// Changed year from 2023 to 2024
x.setFullYear(2024)
console.log(x)

// bakie month , date , hour , minute ,second .. b same tareeke se rakhni haii


// How to calculate date after 50 days or any after any days 
let y = new Date("june 21,2023 10:12:33")
y.setDate(y.getDate() + 50) // getDate(current date + 50days  ) ... esko setDate krdo
console.log(y)