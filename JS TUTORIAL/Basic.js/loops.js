// // while loop

// let counter = 1;
// while (counter <= 10) {
//     // document.write('Tech gun')
//     console.log('Tech Gun\n')
//     counter++;
// }

// Nested for loop

outer: for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);

    for (let counter2 = 1; counter2 < 3; counter2++) {
        if (counter == 3) {
            break outer; // outer loop ko inner loop se band karna 
        }
        console.log('tech gun');

    }

}