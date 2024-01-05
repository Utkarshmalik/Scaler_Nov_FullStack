// Syntax Errors:

// 1.  Unexpected identifier

// console.log('Hello, world!';

// 2.  lllegal Shadowing : Identifier 'a' has already been declared

// let a=10;

// {
//     var a=20;
//     console.log(a);

// }




//   Runtime error -> only get to know after exceuting the code 
//   TypeError
//   Reference Error
//   Range Error


//  Reference Errors:
//  Reference errors occur when trying to reference an undeclared variable or an out-of-scope variable.

// console.log(x);


//  TDZ -> temporal Dead Zone ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a=5;


// fn();


/***********
 *
 * Range error
 * *****/

// 1. RangeError: Maximum call stack size exceeded stackoverflow  
// infinite recursion
// function add(){
//     add();
// }
// add();

// 2. array size RangeError: Invalid array length
// let a=[];
// a.length = 100 ** 100;
// console.log(a.length);

// Range errors occur when a numeric value is not within an acceptable range.

// const arr = new Array(-1);


// const bigIntNumber = 9007199254742424345099642n; 
// console.log(Number(bigIntNumber));


// Type Errors:
// Type errors happen when an operation is performed on an inappropriate data type.
//  * 1.whenever a method is called and it does not exist 
//  * 2. when you accessing a property for which  object is undefined

// let name = undefined;
// console.log(name.toUpperCase());


// let num=10;
// console.log(num.toUpperCase());