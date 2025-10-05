let str = "wasif"
console.log(str[2])
console.log(str.length)

let str2 = "banday";
console.log(str + " ahmad " + str2)

// concatition  : jodhna
let str3 = str.concat(" ", str2);
console.log(str3)

// substring extract

let strr = "this is js tutorial . It is a good tutorial"
let substring = strr.substr(8, 11) // length 8 se start karo  ... 11 length tak jao 
console.log(substring)


// How to find position of any word in string 
let string = "this is js tutorial . It is a good tutorial"
let position = string.indexOf('good')
console.log(position)

// How to turn a string into uppercase/lowercase
let string1 = "This is js tutorial . It is a good tutorial"
let upprcase = string1.toUpperCase();
let lwrcse = string1.toLowerCase();
console.log(string1) // normal
console.log(upprcase) // Upper-Case
console.log(lwrcse) // lower-Case


// How to replace any word in string
let rplce = "This is js tutorial . It is a good tutorial"
let change = rplce.replace('good', 'best'); // good ki jageh best kardo
console.log(change) // instead og 'good' there will be 'best'

// How to check is there any word present in string or not ..
// includes : use of this function...
let word = 'hello its me wasif from kashmir '
let check = word.includes('wasif')
console.log(check)