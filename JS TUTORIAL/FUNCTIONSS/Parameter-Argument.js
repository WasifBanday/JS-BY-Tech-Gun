function MulTable(num) { // Num :- Parameter (variable defined inside function)
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`)
    }
    console.log(`\n`)
}
MulTable(2); // (2) : Argument (value assign to the variable defined in function)
MulTable(5);