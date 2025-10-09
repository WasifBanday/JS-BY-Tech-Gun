function MulTable(num) { // Num :- Parameter (variable defined inside function)
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`)
    }
    console.log(`\n`)
}
MulTable(2); // (2) : Argument (value assign to the variable defined in function)
MulTable(5) // (5) : Argument (value assign to the variable defined in function)



// Lets pass two Arguments

function add(num1, num2) { // Two parameters defined here / or we can say two variables defined ....
    console.log(num1 + num2)
}
add(5, 7) // 5 chala gaya num1 mai .. aur 7 chala gaya num2 mai