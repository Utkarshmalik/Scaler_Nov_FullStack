

/*
     Code Excution : always exec in EC (Execution Context)
   1. GEC : Global execution Context : When you run a JS program
   2. FEC : Functional Exectuion Context : On EveryFunction call 
*/


// code execution
     // 1.  EC creation
            // 1.a Hoisting -> memory allocation
                                // variable -> undefined;
                                // fn -> get it's memory allocated
                // 2. global -> browser -> window/nodejs-> global-> features
                // 3. outer scope-> outer var
                // 4. this-> always calculated
    //  2. EC Code execution
           


// var x = 10;

// function timesTen(a){
//     return a * 10;
// }

// var y = timesTen(x);

// console.log(y);   



// var a = 10;

// function fn() {
//     console.log("I am fn");

//     function inner() {
//         console.log("I am inner");
//     }


//     inner();
// }

// fn();


// Scope of variables refers to the accessibility of a particular variable within the program. 

// Global Scope : Any variable declared outside of a function is said to have Global Scope.
// Local Scope : Any variable that you declare inside a function is said to have Local Scope
// Block Scope :  You cannot access the variables declared inside a particular block (represented by {}) from outside the block. 
// Function Scope : You cannot access variables defined inside a function from outside the function or from another function. 
 //  Var, let, and const work similarly when used inside a function. 


// The block scope does not work with the var keyword. You can either use let or const keywords for that.

// {
//      var a="Hey everyone";
// }

// console.log(a);



// {
//      let a="Hey everyone";
// }

// console.log(a);


// function food(){
//     var fruit = "apple";
// }

// console.log(fruit);


// console.log(a);
// var a=10;




// console.log(add(5,10));

// function add(a,b){
//     return a+b;
// }


// function real() {
//     console.log("I am real. Always run me");
// }
// function real() {
//     console.log("No I am real one ");
// }
// real();
// function real() {
//     console.log("You both are wasted");
// }

// // What will be the output when the code is executed?

// // [ ] "No I am real one"
// // [] "You both are wasted"
// // [ ] Error









// var add = function(a,b){
//     return a+b;
// }

// var result = add(1,5);

// console.log(result);




// console.log(add(5,10));

// function add(a,b){
//     return a+b;
// }



// var result = add(1,5);

// console.log(result);


// var add = function(a,b){
//     return a+b;
// }

