
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// A constructor function is a regular function with the following convention:

// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.


// Create a new empty object and assign it to the this variable.
// add properties to this
//Return the this value


// function Person(firstName, lastName){


//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){
//         return this.firstName + " " + this.lastName;
//     }

// }


// let person1 =  new Person("Utkarsh","Malik");
// let person2 =  new Person("Rahul","Jain");
// let person3 =  new Person("Shreya","Garg");


// console.log(person1);
// console.log(person2);
// console.log(person3);


// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person3.getFullName());



function Person(firstName, lastName){


    this.firstName = firstName;
    this.lastName = lastName;

}



Person.prototype.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }

let person1 =  new Person("Utkarsh","Malik");
let person2 =  new Person("Rahul","Jain");
let person3 =  new Person("Shreya","Garg");



console.log(person1.__proto__ === Person.prototype);
console.log(person2.__proto__ === Person.prototype);
console.log(person3.__proto__ === Person.prototype);
console.log(person1.__proto__.__proto__ === Object.prototype);
console.log(person1.__proto__.__proto__.__proto__ === null);
 
// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person3.getFullName());


//  let arr= [1,2,3,4,5];
// let arr= new Array(1,2,3,4,5);

//  console.log(arr);

//  console.log(arr.__proto__ === Array.prototype);
//  console.log(arr.__proto__.__proto__ === Object.prototype);
//  console.log(arr.__proto__.__proto__.__proto__ === null);


// const obj1={
//     name:"Utkarsh"
// }

// console.log(obj1);
// console.log(obj1.toString())
// console.log(obj1.__proto__ === Object.prototype);
