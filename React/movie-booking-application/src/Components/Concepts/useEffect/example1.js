// useEffect is a React Hook that allows you to perform side effects in functional components.
// Side effects can include data fetching, subscriptions, manually changing the DOM, and more. 
// It helps you manage the lifecycle of a component by running code after the component has been rendered.


//Lifecycle of a functional component in React


import React, { useEffect } from 'react';


function ExampleComponent() {
  useEffect(() => {
    // Code to run after the component renders
    console.log('Component has been rendered');

    // Clean-up function (optional)
    return () => {
      console.log('Clean-up function');
    };
  }, []); // Dependency array (optional)
  
  return (
    // JSX for the component
    <div>
      Example Component
    </div>
  );
}

// Effect Function: The first parameter is a function that contains the code you want to run after the component renders.


// Dependency Array: The second parameter is an array of dependencies. 
// If any of these dependencies change, the effect function will run again. 

// If the array is empty, the effect will only run once after the initial render. 

// If there's no dependency array, the effect runs after every render.

