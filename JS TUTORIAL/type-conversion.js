let type = "5" * "2" // number
console.log(typeof type)

let type2 = 5 + "yes" // string because "+ operator" it acts like adding 5 and 2 as string 
console.log(typeof type2)
console.log(type2)

let type3 = "5" * "yes"
console.log(typeof type3)
console.log(type3) // not a number


/*

Three functions are given by js for conersion 
1. string()
2. Number()
3. boolean()

*/

// string()  : number into string
let type4 = 4;
console.log(typeof type4)
    // Converting this into string
let NewType = String(type4);
console.log(typeof NewType)

let type5 = false;
console.log(typeof type5)
    // Converting boolean into string
let NewType2 = String(type5);
console.log(typeof NewType2)



// Number()  :  string into  number
let type6 = "was";
console.log(typeof type6)
    // Converting string into number
let NewType3 = Number(type6);
console.log(typeof NewType3)
console.log(NewType3) // not a number



// boolean()  : number into  boolean
let type7 = 0;
console.log(typeof type7)
    // Converting string into number
let NewType4 = Boolean(type7);
console.log(typeof NewType4)
console.log(NewType4) // not a number