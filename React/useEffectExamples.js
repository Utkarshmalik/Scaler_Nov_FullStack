//1. Data Fetching


import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array means it runs only once when the component mounts.

  return (
    <div>
      {data ? (
        // render data
      ) : (
        // render loading or placeholder
      )}
    </div>
  );
}



//2.Event Listeners : Adding and removing event listeners.



import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    const handleClick = () => {
      // handle click event
    };

    window.addEventListener('click', handleClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleClick);
    };

    
  }, []); // Empty dependency array to ensure the effect is only applied once.

  // Component rendering logic
}



// 3. Component Cleanup:


import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Set up some resource

    // Cleanup: Release the resource when the component unmounts
    return () => {
      // Clean up code
    };
  }, []); // Empty dependency array means it runs only once when the component mounts.

  // Component rendering logic
}


// 4. Dependency-based Effects:


import React, { useEffect, useState } from 'react';

function ExampleComponent({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://api.example.com/user/${userId}`);
      const result = await response.json();
      setUserData(result);
    };

    fetchUserData();
  }, [userId]); // Run effect whenever userId changes

  // Component rendering logic using userData
}



// websockets example 


import React, { useEffect } from 'react';

function WebSocketComponent() {
  useEffect(() => {
    const socket = new WebSocket('wss://example.com/socket');

    // Handle socket events

    // Cleanup: Close the socket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []); // Empty dependency array means it runs only once when the component mounts

  // Component rendering logic
}