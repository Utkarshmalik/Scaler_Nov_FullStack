// In JavaScript, objects are non-primitive data types that allow you to store multiple collections of data.

/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/


/******1. Object literal**************
 * 1. properties and methods
 * 2. Object -> as your prototype (parent)
 * */

// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };
// console.log("Object", obj);

// console.log(obj.__proto__ === Object.prototype);


/**
 * **************************Inbuilt object works ***************
 *  * 1. array -> Array(Object/class)
 *  * 2. function -> Function
  * 3. object -> Object 
  *  * For primitive : temporary parent
 * *  num -> Number
 * *  str -> String
 * *  boolean -> Boolean
 * 
 * 
 * 
 * */

// let arr1  = [1,2,3];
// console.log(arr1);

// function f1(){
    
// }

// console.dir(f1);

// let a = 5;

// console.log(a);

// console.log(Number);

// let s ="appke";

// console.log(s.__proto__ == String.prototype);

// // let arr=s.split('');
// // console.log(arr);



// Autoxing

// https://medium.com/weekly-webtips/autoboxing-in-javascript-a368b42d8969




// 1.2 Using Object.create()
// Object.create() creates a new object and links it to the prototype of an existing object.



// let obj = Object.create(null);
// console.log(obj.__proto__);


// const obj1={
//     nanme:"Utkarsh"
// }


// let obj2 = Object.create(obj1);

// console.log(obj2);



// // is parent of 
// console.log(obj1.isPrototypeOf(obj2));




//   Specie , Animal , Bird 


const specie={
    type:"Specie",
    speak:function(){
        console.log(`${this.type} is speking`)
    }
}



const animal = Object.create(specie);



animal.walk = function (){
    console.log("Animal is walking");
}


const bird = Object.create(animal);

bird.fly = function (){
    console.log("Bird is flying");
}



// console.log(bird)

// console.log(Object.keys(bird));

// for(let key in bird){
//     console.log(key);
// }

//  loop -> object -> for in loop -> iterate over all the prop of the object 
// inherited which are enumrable to for in

for(let key in bird){
    if(animal.hasOwnProperty(key)){
        console.log(key);
    }
}


console.log(bird);


// enumerable: Returns true if the property is visible during enumeration of the properties of the corresponding object.
