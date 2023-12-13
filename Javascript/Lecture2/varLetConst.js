// In JavaScript, you can declare variables with the var, let, and const keywords


// Scope of variables
// Redeclaration and reassignment
//Hoisting



//var 


// /1. Scope 

// var number = 50

// function print() {
//   var square = number * number
//   console.log(square)
// }

// console.log(number) // 50

// print() // 2500

// var number;

// console.log(number);


// re declaration


// var number = 50
// console.log(number) // 50

// var number = 100
// console.log(number) // 100




// re assignment

// var number = 50
// console.log(number) // 50

// number = 100
// console.log(number) // 100

// number = 200
// console.log(number) // 200







// console.log(number) // undefined

// var number = 50



// function print() {
//   var square1 = number * number
//   console.log(square1)

//   var number = 50

//   var square2 = number * number
//   console.log(square2)
// }

// print();


// --------------------------------------------------------------------------------------------------------




// Variables declared with let can have a global, local, or block scope


// {
//   // a block
// }


// let number = 50

// function print() {
//   let square = number * number

//   if (number < 60) {
//     var largerNumber = 80
//     let anotherLargerNumber = 100

//     console.log(square)
//   }

//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }

// print()



// let number = 50
// console.log(number) // 50

// number = 100
// console.log(number) // 100



// let number = 50

// let number = 100


// var variables are hoisted with a default value of undefined, 
// which makes them accessible before their line of declaration

// console.log(number);

// var number = 50




// console.log(number);

// let number = 50;


// Temporal Dead Zone  : the state where variables are un-reachable. They are in scope, but they aren't declared.


// --------------------------------------------------------------------------------------------------------

// const number = 50

// function print() {
//   const square = number * number

//   if (number < 60) {
//     var largerNumber = 80
//     const anotherLargerNumber = 100

//     console.log(square)
//   }

//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }

// print()


// const number = 50

// const number = 100


// const number = 50

// number = 100



// console.log(number)

// const number = 50
