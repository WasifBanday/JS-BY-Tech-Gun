let user = { // Main Object
    id: 101,
    email: 'abc@gmail.com',

    personalInfo: { // 1st Sub object
        name: "wasif",
        class: '5ht',

        address: { // 1st Sub-Sub object
            street: '2nd',
            City: 'srinagar',
            country: 'India'
        }
    }
}
console.log(user.personalInfo.address.country)