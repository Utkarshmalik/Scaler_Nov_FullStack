// Majorly Promise has two properties.
// Value: Represents current value inside that object
//     Undefined, initially value is undefined
//     Value that was supposed to be here
// State: There can be two states
//     Pending, initially state is pending
//     Fulfilled



// const fs= require("fs");
// console.log("Before");

// const promise =  fs.promises.readFile("./f1.txt");

// console.log(promise);

// console.log("After");

// setTimeout(()=>{
//     console.log("I after file read");
//     console.log(promise);
// },2000)

// Consuming Promises


// Then and Catch


// then: Promise gives us a method named then which is an event listener over promise and it triggers when the promise is resolved(the task is done).
// catch: catch is also an event listener over promise and it triggers when the promise is rejected(you get an error).



// const fs = require("fs")
// console.log("Before")
// const promise = fs.promises.readFile("./f5.txt");


// promise.then().catch()

// promise.then(function(futureValue){
//     console.log("Data inside the file is "+futureValue);
// })


// promise.catch(function(err){
//     console.log("Error",err.message);
// })







function orderBurger(){

    return new Promise((resolve,reject)=>{

        //create a burger , it will take some time

        setTimeout(()=>{

            // resolve(" BURGER-CHEESE");

            reject("Cheese is not available");

        },2000);

    })

}


orderBurger()
.then((value)=>{
        console.log("Promise is resolved");
        console.log("I have got the burger "+value)
})
.catch((err)=>{
        console.log("Promise is rejected");
        console.log(err);
})