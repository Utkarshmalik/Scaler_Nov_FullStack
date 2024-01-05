// 1. Fetching Data from Multiple Sources Sequentially


// async function fetchDataSequentially(){
//     try{

//           const data1 = await fetch('https://api.example.com/data1');
//           const result1 = await data1.json();


//           const data2 = await fetch('https://api.example.com/data2');
//          const result2 = await data2.json();

//         console.log('Results:', { result1, result2 });

//     }
//     catch(error){
//             console.error('Error fetching data:', error);

//     }
// }

// // Using the async function
// fetchDataSequentially();



// Handling Multiple Promises in Parallel


async function fetchDataInParallel(){

  try {
     const [result1, result2, result3] =  await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2'),
      fetch('https://api.example.com/data3')
    ]);

    const [data1,data2,data3] = await Promise.all([
        result1.json(),
        result2.json(),
        result3.json()
    ])


    console.log('Data from API 1:', data1);
    console.log('Data from API 2:', data2);
    console.log('Data from API 3:', data3);
}
catch (error) {
    console.error('Error fetching data:', error);
  }

}


fetchDataInParallel();



//  async/await is syntactic sugar that simplifies the syntax for working with promises in JavaScript