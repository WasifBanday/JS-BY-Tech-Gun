// lets give some functions to this object 'Methods'

let person = {
    FirstName: "Wasif",
    LastName: "Banday",
    height: 5.9,
    age: 20
};

// 4 ways to give functions to the object

// 1. By anonymous function
person.sayHello = function() {
    console.log(" Hello !")
}
person.sayHello();


// 2. By normal function
function greet() {
    console.log(" Hi !")
}
person.sayHi = greet;
person.sayHi();


// 3. 
let person2 = {
    FirstName: "hilal",
    LastName: "Banday",
    height: 5.9,
    age: 20,
    sayHey: function() {
        console.log(" Hey !")
    }
};
person2.sayHey()


// 4. 
let person3 = {
    FirstName: "faizan",
    LastName: "Banday",
    height: 5.9,
    age: 20,
    sayYes() {
        console.log(" Yes !")
    }
};
person3.sayYes()