
// const fs= require("fs");

// console.log("before");


// const promise = fs.promises.readFile("./f1.txt");

// promise
// .then((data)=>{
//     console.log("Data inside the file 1 is " + data)
//     return fs.promises.readFile("./f2.txt");
// })
// .then((data)=>{
//      console.log("Data inside the file 2 is " + data)
//     return fs.promises.readFile("./f3.txt");
// })
// .then((data)=>{
//       console.log("Data inside the file 3 is " + data)
// })
// .catch((err)=>{
//     console.log("err ",err);
// })

// console.log("After");


// The async keyword allows you to define a function that handles asynchronous operations


// The async keyword is used to declare an asynchronous function. 
// An asynchronous function returns a promise implicitly

// async function fetchData() {
//   return 'Data fetched asynchronously';
// }


// const promise = fetchData();

// fetchData().then(data => console.log(data));





// 2. await Keyword:

// The await keyword is used inside an async function to pause execution until a promise is settled 
// (either fulfilled or rejected)



// async function fetchData() {
//       const result = await fetch('https://api.example.com/data');
//       return result;
// }


// Reading a File using fs module

// async function displayFileContent(){
//     const content1 =  await fs.promises.readFile("./f1.txt");
//     console.log("content1 "+ content1);
//    const content2 = await fs.promises.readFile("./f2.txt");
//    console.log("content2 " + content2);
//    const content3 = await fs.promises.readFile("./f3.txt");
//    console.log("content3 " + content3);
// }

// displayFileContent();







// async function fetchData(){

//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    const data =   await response.json();

//    console.log(data);

// }


// fetchData();

async function fetchData() {


     try {
        const response = await fetch('https://jsonplaceholer.typicode.com/todos/1');
        const data =   await response.json();
            console.log('Data:', data);

     }
     catch (error) {
    console.error('Error fetching data:', error.message);
  }

}

fetchData();