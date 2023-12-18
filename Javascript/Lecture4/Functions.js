/**
 * functions are also object
 * object : key : value pair  
 * */

// function fn(){
//     console.log("Hi , I am an fn");
//     fn.count++;
// }

// fn.count=0;

// fn.showCount = function(){
//     console.log("count on fn is",this.count);
// }


// fn();
// fn();

// fn.showCount();


// console.log(typeof fn);


// console.dir(fn);


// for(let key in fn){
//     console.log(key,": ",fn[key]);
// }


/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called */

// console.dir(fn);




/***
 * function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */



// let a = ()=>{
//     console.log("helo");
// }


// const add=(a,b)=>{
//     return a+b;
// }


// const average=(add,a,b)=>{
//     return (add(a,b)/2);
// }


// console.log(average(add,5,3));


// A high-order function either accepts functions as arguments or returns functions.



// function fn(param) {
//     console.log(" I recived a param", param); 
//     if (typeof param === "function") {
//         param()
//     }

// }
// function smallerfn() {
//     console.log("I am smaller");
// }
// function HOF(cb) {
//     console.log("Inside HOF");
//     cb();
// }
// HOF(smallerfn);