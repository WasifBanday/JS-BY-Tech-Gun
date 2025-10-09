function add() {
    if (arguments.length == 0) { // argument automatically define ho jata hai jitney b parameters ayeinge woh usmai store houngey 
        console.log("  No parameter passed !")
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}

add(7, 8, 9, 9, 8, 88)

// Function ko variable mai store karna 
let addition = add; // storing function in an variable , we can call it with this variable also
addition(6, 9, 9, 9, 8)