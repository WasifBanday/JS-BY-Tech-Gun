// forin loop is used to iterate all the properties in an object 


let person = {
    FirstName: "Wasif",
    LastName: "Banday",
    height: 5.9,
};


// loop k andr 'Array' notation use karni hai properties ki value ko print karney k lia  ,, dot notation kaam nahi kareiga
for (let key in person) { // key k andrr sarie properties atie hai bari bari se 
    console.log(key + " " + person[key]) // fir yehaan unhi ko print / console krtey hai,, person[key] se properties ki value print hoti hai

}