// let p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject(new Error(300));
//     }, 2000);
//     resolve(100);
//     setTimeout(function() {
//         reject(new Error(401));
//     }, 200);
//     resolve(200);
//     setTimeout(function() {
//         reject(new Error(500));
//     }, 2000);
// });

// p.then(function(data) {
//     console.log(1,data);
// }).catch(function(err) {
//     console.log(2);
//     console.log(err);
// }).finally(function() {
//     console.log(3);
// });

// p.then(
//     function(value) {
//         console.log("44",value);
//     },
//     function(err) {
//         console.log(err);
//     }
// );




Promise.resolve(1)
    .finally((data) => {
        console.log(data);
        return Promise.reject('error');
    })
    .catch((error) => {
        console.error(error);
        throw 'error2';
    })
    .then(() => {
        console.log("1");
        return Promise.resolve(2);
    })
    .then(console.log)
    .then(console.log)
    .catch(console.log);
