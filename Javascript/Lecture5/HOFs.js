


// let arr = [5,7,8,9];


// code to square every element in the array


// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i];
// }


// console.log(arr);


// // code to cube of every element in the array

// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i]*arr[i];
// }

// console.log(arr);

//Violating the DRY :(Donot Repeat yourself) principle 




/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to another fn are known as cb fns. 
 * They usually be called by HOFns 
 * */



// Array.prototype.transformer  = function(logic){

//     let arr=this;
//     let newArr=[];

//     for(let i=0;i<arr.length;i++){
//         let ans=logic(arr[i]);
//         newArr.push(ans);
//     }

//     return newArr;

// }


// const squaredArr = arr.transformer((a)=>{
//     return a*a;
// });


// const cubedArr = arr.transformer((a)=>{
//     return a*a*a;
// });


// console.log(squaredArr);
// console.log(cubedArr);








/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
    * foreach -> 
    * Map -> 
    * filter -> 
    * reduce -> 
    * sort -> 
 * */



// let arr=[1,5,7,9,10];

// console.log(arr);


// arr.forEach((value,index,arr)=>{
//     console.log(value, index,arr);
// })



//can you write please your own forEach funtion (polyfill for forEach)


// Array.prototype.customForEach = function(cb){

//     for(let i=0;i<this.length;i++){
//         cb(this[i],i,this);
//     }

// }


// arr.customForEach((value,index,arr)=>{
//     console.log(value, index,arr);
// })


// let arr=[1,5,7,9,10];

// const mappedArr = arr.map((value,index,array)=>{
//      return value*5 + 100 - index;
//  })


//  const squaredArr = arr.map((value,index,arr)=>{
//     return value * value;
//  })



//  const cubedArr = arr.map((value,index,arr)=>{
//     return value * value * value;
//  })


//  console.log(squaredArr);
//  console.log(cubedArr);


//Implement a polyfill for map 


// let arr=[1,5,7,9,10];

// Array.prototype.customMap = function(cb){

//     let newArr=[];

//     for(let i=0;i<this.length;i++){
//         let result = cb(this[i],i,this);
//         newArr.push(result);
//     }

//     return newArr;
// }

// const mappedArr = arr.customMap((value,index,array)=>{
//      return value*5 + 100 - index;
//  })


//  const squaredArr = arr.customMap((value,index,arr)=>{
//     return value * value;
//  })



//  const cubedArr = arr.customMap((value,index,arr)=>{
//     return value * value * value;
//  })


//  console.log(squaredArr);
//  console.log(cubedArr);





//filter 

// let elements = [1, 2, 3,11,4,5,45,34,12,18];




// const oddNUmbers = elements.filter((value,index,arr)=>{
//     return value%2===1;
// })



// const evenNumbers = elements.filter((value,index,arr)=>{
//     return value%2===0;
// })

// console.log(oddNUmbers);
// console.log(evenNumbers);


// let elements = [1, 2, 3,11,4,5,45,34,12,18];


// Array.prototype.customFilter = function(cb){

//     let newArr=[];

//     for(let i=0;i<this.length;i++){

//         let isIncluded = cb(this[i],i,this);

//         if(isIncluded){
//             newArr.push(this[i]);
//         }

//     }
//     return newArr;
// }




// const oddNUmbers = elements.customFilter((value,index,arr)=>{
//     return value%2===1;
// })



// const evenNumbers = elements.customFilter((value,index,arr)=>{
//     return value%2===0;
// })

// console.log(oddNUmbers);
// console.log(evenNumbers);


//reduce

// let arr=[4,5,2,45,5,13,5,3,5,3,56,3,56];


//whenever you want your arr to reduce to a single value : Number, String, Object, anotherArray 


//find the sum of a given array 

// reduce the array to the sum of its array

// [4,5,2,45,5,13,5,3,5,3,56,3,56]  -> sum 


//   let sum = arr.reduce((acc,value,i,arr)=>{

//     return acc + value;

//   },0);

//   console.log(sum);


//reduce a given array to a space seperated string 


// let reducedValue  = arr.reduce((acc,value,i,arr)=>{
//     return acc+ value+" ";
// },"")


// console.log(reducedValue);



// write the polyfill for reduce


Array.prototype.customReduce  =function(cb,initalValue){

    let acc  = initalValue;

    for(let i=0;i<this.length;i++){

          acc  = cb(acc,this[i],i,this);

    }

    return acc;
}



//   let sum = arr.customReduce((acc,value,i,arr)=>{

//     return acc + value;

//   },0);

//   console.log(sum);


// // reduce a given array to a space seperated string 


// let reducedValue  = arr.customReduce((acc,value,i,arr)=>{
//     return acc+ value+" ";
// },"")


// console.log(reducedValue);





// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // achieving what you achieved via filter also using reduce


// const output  = arr.customReduce((acc,value)=>{

//     if(value%2===1){
//         acc.push(value);
//     }

//     return acc;

// },[])


// console.log(output);