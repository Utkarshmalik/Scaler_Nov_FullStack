const fs = require("fs");


Promise.myPromiseAll = function(arrayOfPromises){

    var resovledCount=0;

    return new Promise((resolve,reject)=>{

        const resolvedPromiseArr = [];
        
        arrayOfPromises.forEach(async (promise, index)=>{

            try{
                console.log("inside forEach");
                const value = await promise;
                resovledCount++;
                resolvedPromiseArr[index]=value;

                if(resovledCount ===  arrayOfPromises.length){
                    resolve(resolvedPromiseArr);
                }

            }
            catch(err){

                reject(err);

            }

        })

    })

}




const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 resolve');
    resolve(1);
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 resolve');
    resolve(2);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3 resolve');
    resolve(3);
  }, 1000);
});

const combinedpromise = Promise.myPromiseAll([promise1, promise2,promise3]);


combinedpromise.then(function (resultArr) {
    console.log(resultArr);
    let result="";
    resultArr.forEach((data)=>{
        result += data;
    })
    return result;
})
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log("Err",err);
})
