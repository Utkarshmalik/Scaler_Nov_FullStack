// function myFunction() {
//   console.log('Timeout completed!');
// }

// const timerId = setTimeout(myFunction, 2000); // Execute myFunction after 2000 milliseconds (2 seconds)


// clearTimeout(timerId);


// Example: Display a notification after a delay, but cancel it if the user interacts with the page

// let notificationTimerId;

// function displayNotification(message) {


//  notificationTimerId = setTimeout(()=>{
//           console.log('Notification:', message);
//     },2000)

// }

// function simulateUserInteraction() {

//       console.log('User interaction detected');

//       clearTimeout(notificationTimerId);

// }

// displayNotification('Welcome to the website!');


// // Simulate user interaction after 1.5 seconds
// setTimeout(simulateUserInteraction, 1500);








// let count = 0;

// const intervalId = setInterval(() => {
//   console.log(`Count: ${count}`);
//   count++;

//     if (count === 5) {
//     clearInterval(intervalId); // Stop the interval after the count reaches 5
//   }

// }, 1000);





// const fetchDataInterval = setInterval(() => {
//   // Fetch data from a server at regular intervals
//   fetchData();
// }, 5000);


