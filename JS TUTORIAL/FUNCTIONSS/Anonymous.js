// Anonymous Function  : Function without name is called anonymous function ....

// Function expression  :---Assigning Function to variable
let show = function() {
    console.log("Hello world !");
}
show();

// if we want the output after some time-duraton we use another function 
//      two parameters are passed 
// setTimeout(Entire Function/FunctionName , Time(in mili seconds))


// Also example of anonymous function
setTimeout(function() {
        console.log("Hello world !");
    }, 3000) // 3000 means 3 seconds but its in mili seconds thats why its 3000