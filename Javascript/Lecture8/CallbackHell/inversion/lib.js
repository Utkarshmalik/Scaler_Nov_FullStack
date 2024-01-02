function runMlalgo(amount, cb) {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
        console.log("payment done");
        cb();
        cb();
        cb();
        cb();
        cb();
    }, 1000);
}


function pRunMLalgo(amount){

// Once a resolve() or reject() is called on the promise
// then the promise will become a black box. Then any resolve() or reject() does not have any effect on promise


return new Promise((resolve,reject)=>{

      console.log("running ml algo");
      console.log("processing payment");

          setTimeout(function () {
        console.log("payment done");
        resolve();
        resolve();
        resolve();
        resolve();
        reject();
        resolve();
        resolve();
        resolve();

    }, 1000);

})


}



module.exports = {
    runMlalgo,
    pRunMLalgo

}