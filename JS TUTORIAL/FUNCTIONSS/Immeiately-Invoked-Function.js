// Immediately-Invoked-Function 
(function() {
    console.log("Hello World !")
})();



// Why we will use this...
// 1.When we don't want to occupy more ram in global variable
// 2.When we define any variable in function , after execution the variable gets deleted from the ram 
// 3.When we take code from any third party to our project there could be same name global variables in his code and in mine , 
//   so to ignore that we wrap third party code in Immeiately-Invoked-Function to avoid error