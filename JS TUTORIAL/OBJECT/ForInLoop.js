// forin loop is used to iterate all the properties in an object 


let person = {
    FirstName: "Wasif",
    LastName: "Banday",
    height: 5.9,
};

for (let key in person) { // key k andrr sarie properties atie hai abri bari se 
    console.log(key) // fir yehaan unhi ko print / console krtey hai
}