// ...Multi-Dimentional-Array : Means Array inside array 

let books = ["Math", "Physics", "Chemistry"]; // Normal array

let bookWithPages = [ // Array k andrr Array
    ["Math", "500"], // 0 index
    ["physics", "400"], // 1 index
    ["chemistry", "300"] // 2 index
];

// How to print the array in array
//    Lets print "physics : 400" 

let fetch = bookWithPages[1]; // [1]--> means 1st index element ko select karo...
console.log(fetch)




// practice 
// print 100 in this array 

let books2 = [
    ["Math", ["500", "300", ["200", "100"]]],
    ["physics", "400"],
    ["chemistry", "300"]
];
console.log(books2[0][1][2][1])