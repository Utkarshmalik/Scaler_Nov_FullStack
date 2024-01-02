const fs = require("fs")
console.log("Before")
// const promise = fs.promises.readFile("./f1.txt");



// promise.then((data1)=>{

//     console.log("Content "+ data1);

//     const p2 = fs.promises.readFile("./f2.txt");

//     p2.then((data2)=>{
//         console.log("Content "+data2);

//         const p3 = fs.promises.readFile("./f3.txt");

//         p3.then((data3)=>{
//             console.log("Content "+data3);
//         })
//     })
// })


// chaining the next then with the previous then,
//  so in this case promise returned by the previous then will be treated as an input promise for the next then.

// promise.then((data)=>{
//     console.log("Content "+ data);
//     const p2 = fs.promises.readFile("./f2.txt");
//     return p2;
// })
// .then((data)=>{
//     console.log("Content "+ data);
//     const p3 = fs.promises.readFile("./f3.txt");
//     return p3;
// })
// .then((data)=>{
//     console.log("Content "+ data);
// })


const promise = fs.promises.readFile("./f1.txt");

promise.then((data)=>{
    console.log("Content "+ data);
    return fs.promises.readFile("./f5.txt");
})
.then((data)=>{
    console.log("Content "+ data);
    return fs.promises.readFile("./f3.txt");
})
.catch((err)=>{
    console.log("Error 3",err.message)
    return 10;
})
.then((data)=>{
    console.log("Content "+ data);
})




