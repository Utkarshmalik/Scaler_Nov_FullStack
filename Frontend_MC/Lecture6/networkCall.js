
// 1. Basic GET Request:

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data=>{console.log(data)})
.catch(error => console.error('Error:', error));




// 1. Basic POST Request:

const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};


fetch('https://jsonplaceholder.typicode.com/posts',{

method:"POST",
headers:{
    'Content-Type':'application/json'
},

body:JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

