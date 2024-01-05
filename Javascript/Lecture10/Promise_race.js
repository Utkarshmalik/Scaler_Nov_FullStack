// // Promise.race(iterable);


// The method returns a new promise that is settled with the same outcome (either fulfilled or rejected) as the first promise that settles.
// The Promise.race method takes an iterable of promises and returns a new promise. 
// This new promise is settled with the same result (either fulfilled or rejected) as the first promise in the iterable that settles.


// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 1 resolved'), 1000);
// });


// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 2 rejected'), 500);
// });

// Promise.race([promise1, promise2])
//  .then(result => {
//     console.log('Resolved:', result);
//   })
//   .catch(error => {
//     console.log('Rejected:', error);
//   });





function fetchDataFromFastestAPI() {

      const api1 = fetch('https://api.example.com/data1');
      const api2 = fetch('https://api.anotherexample.com/data1');
      const api3 = fetch('https://api.yetanotherexample.com/data1');

      Promise.race([api1, api2, api3])
        .then(response => response.json())
        .then(data => console.log('Fastest API response:', data))
        .catch(error => console.error('Error fetching data:', error));


}

fetchDataFromFastestAPI();
