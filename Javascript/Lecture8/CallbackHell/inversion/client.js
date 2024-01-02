const { runMlalgo, pRunMLalgo } = require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;
/**
 * takes the amount and callbacks as paramas
 * and it calls the cb for us
 * */

// function cb() {
//         amount = amount - priceofOne;
//         console.log("Amount: ", amount);
// }

// runMlalgo(amount, cb);

// console.log("After");


pRunMLalgo(amount)
.then(()=>{
         amount = amount - priceofOne;
        console.log("Amount: ", amount);
})



// Callback Hell

// 1. Nesting of callbacks
// 2. Inversion of control: We send our callback 
// function to an async function and then that async function has the control to call it(trust issues).

// Due to both above issues, callback-based functions are not preferred to be used.

