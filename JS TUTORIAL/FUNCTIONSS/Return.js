// What is return in function 

function add(a, b) {
    return a + b //  program ends here
}
let c = add(5, 6); // return ka value 'c' mai store hua
console.log(c)



//     we can use multiple return but based on conditions 

function compare(a, b) {
    if (a > b) {
        return 'a is greater';
    } else if (b > a) {
        return 'b is greater';
    } else {
        return 'a is equal to b';
    }

}
let w = compare(1, 1)
console.log(w)