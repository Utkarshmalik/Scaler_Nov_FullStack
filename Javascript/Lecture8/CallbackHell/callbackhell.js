// let fs = require("fs");

// console.log("Before");

// fs.readFile("./f1.txt", function(err, data){
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log("Content " + data);
//         fs.readFile("./f2.txt", function(err, data){
//             if(err){
//                 console.log("Error" + err);
//             }
//             else{
//                 console.log("Content " + data);
//                 fs.readFile("./f3.txt", function(err, data){
//                     if(err){
//                         console.log("Error" + err);
//                     }
//                     else{
//                         console.log("Content " + data);
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("After");




// https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/053/067/original/upload_e8f08ef49c0edb204fef0b72e2277ae2.png?1696912907


let fs = require("fs");

console.log("Before");

fs.readFile("./f1.txt", f1cb);

function f1cb(err, data){
    if(err){
        console.log("Error", err);
    }
    else{
        console.log("Content " + data);
        fs.readFile("./f2.txt", f2cb)
    }
}

function f2cb(err, data){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log("Content " + data);
        fs.readFile("./f3.txt", f3cb)
    }
}

function f3cb(err, data){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log("Content " + data);
    }
}
console.log("After");