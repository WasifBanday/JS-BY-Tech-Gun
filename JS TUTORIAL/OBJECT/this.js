//   keyword :  This keyword is used when we need to call our own objects property 

let car = {
    brand: 'Tata',
    model: 'Safari'
}


let person = {
    FirstName: "Wasif",
    LastName: "Banday",
    sayHello() {
        console.log(" Hello ! i am " + this.FirstName + " i have a " + car.brand + " car")
    }
};


person.sayHello()