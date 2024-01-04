

//Definition 

// Promises provide a structured way to manage asynchronous tasks
// making it easier to handle and coordinate complex operations without getting lost in callback hell.



//then 
// The then method is used to attach success callbacks to promises. 
// It allows you to specify what should happen when the promise is resolved successfully.
//  Multiple then callbacks can be attached to a promise, creating a chain of actions.



// let fs = require("fs");

// let promise = fs.promises.readFile("f1.txt");


// promise.then(function(data) {
//     console.log("Hi, the data is:"+ data);
// });


// promise.then(function(data) {
//     console.log("Buffer format is:", data);
// });

// promise.then(function() {
//     console.log("I am not accepting");
// });



//catch
// The catch method is used to handle errors that occur while executing a promise. 
// It allows you to define what should happen when the promise is rejected. 
// Multiple catch callbacks can be attached to handle different types of errors.

// let fs = require("fs");
// let promise = fs.promises.readFile("f5.txt");


// promise.catch(function(err) {
//     console.log("err is 1:", err);
// });


// promise.catch(function(err) {
//     console.log("err is 2:", err);
// });

// promise.catch(function(err) {
//     console.log("I am not accepting");
// });





//finally 

// The finally method is used to attach callbacks that execute regardless of whether the promise is resolved or rejected. 
// It's commonly used to perform cleanup or finalization actions





// let fs = require("fs");
// let promise = fs.promises.readFile("f5.txt");


// promise.finally(function(err) {
//     console.log("err is 1", err);
// });



// promise.finally(function(err) {
//     console.log("err is 2", err);
// });


// promise.finally(function() {
//     console.log("I am not accepting");
//     console.log("Second line of finally");
// });




// Skipping in Promises 
// Promise.resolve(10)
// .catch((err)=>{
//     console.log("err",err);
// })
// .then((data)=>{
//     console.log("data",data);
// })


// Promise.reject("Error")
// .catch((err)=>{
//     console.log("err",err);
// })
// .then((data)=>{
//     console.log("data",data);
// })

// Different Ways to Create Rejected Promises

// 1. Promise.reject



// const rejectedPromise1 = Promise.reject("Explicit rejection");

// rejectedPromise1.catch((reason) => {
//     console.log("Caught:", reason);
// });



// 2. Getting a Rejected Value from a Promise-Based Function


// If a promise-based function encounters an error or throws an error, the returned promise will be rejected.


// let fs = require("fs");
// let Filepromise = fs.promises.readFile("f5.txt");

// Filepromise.catch((error) => {
//     console.log("Caught:", error);
// });



// 3. Throwing a New Error

// Promise.resolve("Initial value")
//  .then((data) => {
//         console.log("Data:", data);
//         throw new Error("Error from then");
//  })
//   .catch((err) => {
//         console.log("Caught:", err.message);
//     });




// b) Throwing an Error from catch


// Promise.reject("Rejected value")
//  .catch((data) => {
//         console.log("Caught:", data);
//         throw new Error("Error from catch");
//     })
//  .catch((err) => {
//         console.log("Caught:", err.message);
//     });

    // c) First then Returns a Promise that Could Be Rejected


    // let fs = require("fs");

    // Promise.resolve("Initial data")
    // .catch((err) => {
    //     console.log("1st catch:", err);
    // })
    // .then((data) => {
    //     console.log("2nd then:", data);
    //     return fs.promises.readFile("f1.txt");
    // })
    // .then((data)=>{
    //     console.log("3rd then",data)
    // })
    // .catch((err) => {
    //     console.log("2nd catch:", err.message);
    // });




    // let fs = require("fs");

    // Promise.resolve("Initial data")
    // .catch((err) => {
    //     console.log("1st catch:", err);
    // })
    // .then((data) => {
    //     console.log("2nd then:", data);
    //     return fs.promises.readFile("f7.txt");
    // })
    // .then((data)=>{
    //     console.log("3rd then",data)
    // })
    // .catch((err) => {
    //     console.log("2nd catch:", err.message);
    // });






    // Rules of finally in Promises



// 1) finally Does Not Take Any Parameter

// Promise.resolve("Initial data")
//     .finally(() => {
//         console.log("Finally block executed");
//     })
//     .then((data) => {
//         console.log("Resolved:", data);
//     });


// 2) If finally Returns a Rejection/Error/Promise


// Promise.reject("Initial rejection")
//     .finally((data) => {
//         console.log(data); 
//         throw new Error("I am an error");
//         //return Promise.reject("An error from finally");
//     })
//     .catch((err) => {
//         console.log("Caught:", err);
//     });

// 3) If finally Returns a Value/Promise


// Promise.resolve("Initial data")
//     .then((data) => {
//         console.log(data);  // Initial data
//         return "Finally resolved";
//     })
//     .then((data) => {
//         console.log("Resolved:", data); // Resolved: Finally resolved
//     });

// When the finally block returns a value or a promise that will not be rejected, 
// it doesn't influence the outcome of the parent promise. 
// The resolved value of the parent promise will continue down the chain (exception)


// Promise.resolve("Initial data")
//     .finally((data) => {
//         console.log(data); // 1 undefined
//         return Promise.resolve(10)
//     })
//     .then((data) => {
//         console.log("Resolved:", data);  // Resolved: Initial data
//     })


// 4) finally Receives a Rejection/Error


// Promise.resolve("Initial data")
//  .finally((data) => {
//      console.log(data); 
//     // return "Something";
//     throw new Error("An error in finally")
//  })
//  .catch((err) => {
//      console.log("Caught:", err.message); 
//     });


//     Promise.reject("Error1")
//  .finally((data) => {
//      console.log(data); 
//     return "Something";
//  })
//  .catch((err) => {
//      console.log("Caught:", err); 
//     });

