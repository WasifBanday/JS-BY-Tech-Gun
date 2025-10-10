let str = new Date("june 21,2023 10:12:33")

// how to get time fom 1970 - till mentioned date above 
console.log(str.getTime()) // The computer stores mili-seconds from 1970 to the date we provided .

// how to get only year 
console.log(str.getFullYear());

// how to get only month
console.log(str.getMonth());

// how to get only date
console.log(str.getDate());

// how to get only hour
console.log(str.getHours());

// how to get only minute
console.log(str.getMinutes());

// how to get only second
console.log(str.getSeconds());

// How to get Day name 
console.log(str.getDay()); // 3 means wednesday , because it starts with  ' 0 as monday'