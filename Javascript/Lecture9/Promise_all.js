// Promise.all is a static method available in JavaScript that takes an iterable (e.g., an array) of promises 
// and returns a new promise that is fulfilled with an array of fulfillment values when all of the input promises are fulfilled. 
// If any of the input promises is rejected, the resulting promise is immediately rejected with the reason of the first rejected promise.



// const promise1 = Promise.resolve('Hello');
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('World'), 1000);
// });


// Promise.all([promise1, promise2, promise3])
// .then((values)=>{
//     console.log((values))
// })
// .catch((err)=>{
//     console.log(err)
// })



// const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];


// const promises = urls.map(url => fetch(url).then(response => response.json()));

// console.log(promises);


// Promise.all(promises)
//   .then(data => {
//     console.log(data); // Array of resolved data from fetch requests
//   })
//   .catch(error => {
//     console.error(error); // Will be called if any of the fetch requests fail
//   });




// const promise1 = Promise.resolve('Resolved Promise');
// const promise2 = Promise.reject(new Error('Rejected Promise'));

// Promise.all([promise1, promise2])
//   .then(results => {
//     console.log(results); // This will not be executed
//   })
//   .catch(error => {
//     console.error(error.message); // Output: 'Rejected Promise'
//   });



// const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

// const promise1 = delay(1000, 'Promise 1 completed');
// const promise2 = delay(2000, 'Promise 2 completed');
// const promise3 = delay(1500, 'Promise 3 completed');


// console.time('Promise.all');


// Promise.all([promise1, promise2, promise3])
//   .then(results => {
//     console.timeEnd('Promise.all');
//     console.log(results);
//   })
//   .catch(error => {
//     console.error(error);
//   });