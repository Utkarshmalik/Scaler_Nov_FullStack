// Promise.any(iterable);



// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 1 rejected'), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 2 resolved'), 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 3 rejected'), 800);
// });


// Promise.race([promise1, promise2, promise3])
//   .then(result => {
//     console.log('Promise.race - Fulfilled with:', result);
//   })
//   .catch(error => {
//     console.log('Promise.race - Rejected with:', error);
//   });


//   Promise.any([promise1, promise2, promise3])
//   .then(result => {
//     console.log('Promise.any - Fulfilled with:', result);
//   })
//   .catch(errors => {
//     console.log('Promise.any - Rejected with:', errors);
//   });


//Example 2 

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 1 rejected'), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 2 rejected'), 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 3 rejected'), 800);
// });

// // Using Promise.race
// Promise.race([promise1, promise2, promise3])
//   .then(result => {
//     console.log('Promise.race - Fulfilled with:', result);
//   })
//   .catch(error => {
//     console.log('Promise.race - Rejected with:', error);
//   });

// // Using Promise.any
// Promise.any([promise1, promise2, promise3])
//   .then(result => {
//     console.log('Promise.any - Fulfilled with:', result);
//   })
//   .catch(errors => {
//     console.log('Promise.any - Rejected with:', errors);
//   });


const fetchDataFromSource1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data from Source 1'), 1000);
});

const fetchDataFromSource2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error: Source 2 failed'), 500);
});

const fetchDataFromSource3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data from Source 3'), 800);
});

// Using Promise.race
Promise.race([fetchDataFromSource1, fetchDataFromSource2, fetchDataFromSource3])
  .then(result => {
    console.log('Promise.race - Fulfilled with:', result);
  })
  .catch(error => {
    console.log('Promise.race - Rejected with:', error);
  });



// Using Promise.any
Promise.any([fetchDataFromSource1, fetchDataFromSource2, fetchDataFromSource3])
  .then(result => {
    console.log('Promise.any - Fulfilled with:', result);
  })
  .catch(errors => {
    console.log('Promise.any - Rejected with:', errors);
  });



//   Promise.any focuses on the first fulfilled promise
//    Promise.race considers the first settled promise, whether it's fulfillment or rejection.