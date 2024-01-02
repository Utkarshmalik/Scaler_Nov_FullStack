/**
 * 
 * promisifiy  fs.readfile()
 * 
 * /
 * */


function promReadFile(filePath){

    return new Promise((resolve,reject)=>{

        fs.readFile(filePath,function(err,data){

            if(err){
                reject(err)
            }else{
                resolve(data)
            }

        })

    })

}


/** We want our created function will work for the below code **/

let fs = require("fs");


console.log("Before")


const promise = promReadFile("./f1.txt");


promise.then(function (futureValue){
        console.log("Data inside the file is "+ futureValue)
})
    promise.catch(function (err){
        console.log("Error ",  err)
})


console.log("After")





// Why Promises Are Better than Callback
//    - Promise can either be resolved or rejected once in the lifetime
    //   - Callbacks of promises go to a separate queue known as the microtask queue and it has higher priority than the normal callback queue.
 