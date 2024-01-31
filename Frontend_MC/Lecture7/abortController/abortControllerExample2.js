  const abortController = new AbortController();


const fetchData = async () => {
  // Create an AbortController and get its signal
  const abortSignal = abortController.signal;

  try {
    // Fetch data from the JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      signal: abortSignal
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Process the data
    console.log(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch request aborted');
    } else {
      console.error('Error during fetch:', error);
    }
  }
};

// Call the fetchData function
fetchData();


// Later, if you want to abort the fetch request
// uncomment the next line to test the abortion
abortController.abort();