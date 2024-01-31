// //Notes 

// In JavaScript, the AbortController and AbortSignal provide a way to abort asynchronous operations,
//  such as network requests made with the fetch API. 
 
//  This can be useful in scenarios where you want to cancel a request 
//  if it's taking too long or if the user initiates some action that should interrupt the ongoing request.



// Create an AbortController and get its signal
const abortController = new AbortController();
const abortSignal = abortController.signal;

// Create a fetch request with the signal
fetch('https://api.example.com/data', { signal: abortSignal })
  .then(response => response.json())
  .then(data => {
    // Process the data
    console.log(data);
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch request aborted');
    } else {
      console.error('Error during fetch:', error);
    }
  });

// Later, if you want to abort the fetch request
abortController.abort();