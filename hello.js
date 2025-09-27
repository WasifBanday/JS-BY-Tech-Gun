console.log("hello world")
console.log("Hi")


// random module


// console.log(Math.floor(Math.random() * 1000000));


// OTP = 936463
// HEX = #00FF00-----> 0-9 ---  A B C D E F



// #156187

const clr = document.createElement("h1")

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const value = Math.floor(Math.random() * 1000000)
    const hex = `#${value}`
    document.body.style.background = hex;

    clr.innerText = hex;

    console.log(clr)


    document.body.appendChild(clr)



})