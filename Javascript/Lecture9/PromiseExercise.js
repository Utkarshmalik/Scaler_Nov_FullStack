








































































// Q1

// const promise1 = Promise.reject("Some error");

// promise1.catch(function (err) {
//     console.log("78");
//     console.log("error", err);
// })

// promise1.then(function () {
//     console.log("83", err);
// }).catch(function (err) {
//     console.log("85", err);
// })

// promise1.then(function (data){
//     return "Resolved";
// }).then(function (err) {
//     console.log("92", err);
// })




// const promise1 = Promise.resolve("Test");

// promise1.catch(function (err) {
//     console.log("78");
//     console.log("error", err);
// })

// promise1.then(function (value) {
//     console.log("83", value);
// }).catch(function (err) {
//     console.log("85", err);
// })

// promise1.then(function (data){
//     return "Resolved";
// }).then(function (err) {
//     console.log("92", err);
// })



/*************************Q3*********************/

// let fs=require("fs");
// let promise = Promise.resolve(10);

// promise.then(function (data) {
//     console.log("92", data);
// }).then(function (firstThenVal) {
//     console.log("113", firstThenVal);
//     return 100
// }).then(function (secondThenVal) {
//     console.log("116", secondThenVal);
//     return fs.promises.readFile("f1.txt")
// }).then(function (thirdThen) {
//     console.log("120", thirdThen);
// })


/**
 * 1. Eventlistener -> then ,catch , finally
 * 2. Then -> resolved, catch -> reject, finally -> both individually
 * 2.2 -> catch will always accept -> rejection/error and  then -> always accept values/ promises
 * 3. CHaining then/catch -> rejection|Error -> catch/ everything else -> next then will be called 
 * 4. no catch code stops exceuting 
****/

/*************************Q5*********************/
let fs=require("fs");

let promise = Promise.resolve(10);
promise
    .then(function (data) {
        console.log("92", data);
        return "hello";
    })
    .finally(function(data){
    console.log("117",data);
     throw new Error("i am a error");
    })
    .catch(function (firstThenVal) {
        console.log("113", firstThenVal);
        return 100;
    })
    .finally(function(data){
        console.log("118",data);
    })
    .then(function (secondThenVal) {
        console.log("116", secondThenVal);
        return fs.promises.readFile("f1.txt");
    }).then(function (thirdThen) {
        console.log("120", thirdThen);
    }).catch(function (firstThenVal) {
        console.log("113", firstThenVal);
        return 100
    })
    .finally(function(data){
        console.log("118",data);
    })

