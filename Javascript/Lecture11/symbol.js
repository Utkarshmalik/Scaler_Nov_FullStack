// const string1 = "hello";
// const string2 = "hello";

// console.log(string1 === string2);




// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];

// console.log(array1 === array2);


/****** 
 * symbols  : used to create unique primitives 
 ****/


// let sym = Symbol("hi");
// let sym2 = Symbol("hi");

// console.log("symbol", sym);
// console.log("symbol", sym2);
// console.log(sym === sym2);


//         when you want only to add or delete a property from an object but not  update it
//     hide it during iteration -> you have to use symbol


// let obj = {
//     key1:"Hello",
//     key2:"Hi",
//     [Symbol("id")]:"Private"
// }


// for(let key in obj){
//     console.log(key ," : ", obj[key]);
// }






// const logLevel = Symbol('logLevel');

// const logger = {
//   [logLevel]: 'info',
//   log: function(message) {
//     console.log(`${this[logLevel]}: ${message}`);
//   }
// };

// logger.log("This is an informational message");








// const privateSymbol = Symbol('privateProperty');


// class MyClass {
//   constructor() {
//     this[privateSymbol] = 'I am private';
//   }

//   getPrivateProperty() {
//     return this[privateSymbol];
//   }
// }

// const myInstance = new MyClass();
// console.log(myInstance.getPrivateProperty());
// console.log(myInstance[privateSymbol]);




const LogLevel = {
  INFO: Symbol('INFO'),
  ERROR: Symbol('ERROR'),
  DEBUG: Symbol('DEBUG')
};


const logLevel = LogLevel.INFO;
