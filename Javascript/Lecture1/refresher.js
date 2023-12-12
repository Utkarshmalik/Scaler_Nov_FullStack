// statically (C/C++/Java) typed vs Dyynamically typed language (JS)


// JavaScript is a Dynamically-typed language


// Weakly Typed vs Strongly Typed 

// Weakly-typed languages make conversions between unrelated types implicitly; 
// whereas, strongly-typed languages don’t allow implicit conversions between unrelated types.


// var x=21;
// x=x+"Hii";
// console.log(x);


// // JavaScript is a weakly-typed language


// var , let , const


//Fact 1 : default of JS -> always -> undefined

var myVar;
console.log("value of ",myVar);


// Datatypes in JS


// Primitive Data Types:

// Number
// String
// Null
// Undefined
// Boolean

// New Primitive Types:
// BigInt
// Symbol


// Non-Primitive Types (Reference Types):

// Object
// Functions
// Arrays

// New Non-Primitive Types:

// Map
// Set
// WeakMap
// WeakSet


// ********** number -> similar to mathematical  -> 64 bit floating values
console.log(5/2);


// ********** string 
var name="Utkarsh";
var myName='Utkarsh';

var myAge=28;

// Problem : JS '' and "" doen't support multiple line strings;

var statement = `I am utkarsh 

my age is ${myAge}

`
console.log(statement);



// ********** boolean 

var isMarried = false;


//null and undefined
// undefined: This value is automatically assigned to variables that have been declared but not yet initialized with a value. 
// It is also the default return value of functions that do not explicitly return a value. For example:

// let x;
// console.log(x);

// function foo() {

// }

// console.log(foo());


// null : This is a value that represents the intentional absence of any object value. It needs to be explicitly assigned to a variable. 
// It is often used to indicate that a variable is intentionally empty or has no value.

let y= null;
console.log(y);




// In JavaScript, the typeof operator is used to determine the data type of a variable or an expression.


let num = 42;
let str = "Hello, World!";
let bool = true;
let arr = [1, 2, 3];
let obj = { key: 'value' };
let func = function() {};
var x=undefined;

console.log(typeof num);  // Outputs: "number"
console.log(typeof str);  // Outputs: "string"
console.log(typeof bool); // Outputs: "boolean"
console.log(typeof arr);  // Outputs: "object" (arrays are objects in JavaScript)
console.log(typeof obj);  // Outputs: "object"
console.log(typeof func); // Outputs: "function"
console.log(typeof undefined); // Outputs: "undefined"


let nullValue = null;
console.log(typeof nullValue); // Outputs: "object"


console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
