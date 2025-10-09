//   Local variable vs Global variable

let car = "Audi"; // Global variable : because defined outside function

function add() {

    let car2 = "BMW"; // Local variable : because defined inside function , and can not be used outside the function 

}

//  we can not use same name variable 2 times 
//  But 
// we can use same name variable in different functions

function first() {
    let result = 70;
    console.log(result);
}

function second() {
    let result = 80;
    console.log(result);
}

first();
second();