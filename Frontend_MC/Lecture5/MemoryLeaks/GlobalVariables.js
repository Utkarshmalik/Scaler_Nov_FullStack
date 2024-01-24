
// Memory leaks in JavaScript can occur when a program allocates memory but fails to release it, 
// leading to the accumulation of unused memory over time.

// let globalData = [];

// function addToGlobalArray(data) {
//   globalData.push(data);
// }

// // Function that uses globalData
// function processData() {
//   // Some code here that uses globalData
//   console.log(globalData.length);
// }

// processData();


//10000 lakhs 


// Problem ? 



// Solution: Use a closure to encapsulate the data


function createDataProcessor() {
  let localData = [];

  function addToLocalArray(data) {
    localData.push(data);
  }

  // Function that uses localData
  function processData() {
    // Some code here that uses localData
    console.log(localData.length);
  }

  // Expose only the necessary functions, not the data itself
  return {
    addToLocalArray,
    processData
  };
}

// Usage
const dataProcessor = createDataProcessor();

// Now, use the dataProcessor to manipulate data
dataProcessor.addToLocalArray("New data");
dataProcessor.processData();