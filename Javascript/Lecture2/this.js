


//GEC 


// var x=5;

// var person={
//     name:"Utkarsh"
// }

// console.log(person);
// console.log(window.person);
// console.log(this.person);



// function sayHi(){
//     console.log(this);
// }


// sayHi();
// window.sayHi();



// var person = {

//     name:"Utkarsh",
//     age:29,
//     sayHi:function(){
//         console.log(this);
//         return `Ny name is ${this.name} and my age is ${this.age}`
//     }
// }


// console.log(person.sayHi());


// var person = {

//     name:"Utkarsh",
//     age:29,
//     sayHi:function(){
//         console.log(this);

//         function child(){
//         console.log(this);
//         }

//         return child;
//     }
// }

// // person.sayHi()();

// let child=person.sayHi();
// child();


// var firstName="Animesh";


// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = function(){
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();


// For Execution context created with method call(calling with object), this will be that object.
// For Execution context created with a function call(calling without object), this will be that window.





// function add(a,b){
//     return a+b;
// }


// const add = function(a,b){
//     return a+b;
// }

// const add = (a,b)=>{
//     return a+b;
// }

// console.log(add(4,6));




// var person = {
//     name:"Utkarsh",
//     age:29,
//     sayHi:()=>{
//         console.log(this);
//     }
// }

// person.sayHi();



// var person = {

//     name:"Utkarsh",
//     age:29,
//     sayHi:function(){
//         console.log(this);

//         var child=()=>{
//         console.log(this);
//         }

//         child();
//     }
// }

// person.sayHi();


// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         var iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();



// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : () => {
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// iAmInner() does not have its own this. So it will go to sayHi() to get their this
//  and sayHi() is also an arrow function so it will also not have its own this.





// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const subInner = () => {
//             console.log("54", this.firstName);
//             const iAmInner = ()=> {
//                 console.log("55", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi();



// const obj1 = {

//   name: 'Billy',

//   sing() {
//     console.log('a', this);
//     var anotherFunc = () => {
//       console.log('b', this)
//     }
//     anotherFunc()
//   }
// }

// obj1.sing()


// const obj2 = {

//   name: 'Billy',

//   sing() {
//     console.log('a', this);
//     var self = this;
//     var anotherFunc = function () {
//       console.log('b', self)
//     }
//     anotherFunc()
//   }
// }

// obj2.sing()


var b = {
  name: 'jay',
  say() { console.log(this) }
}

var c = {
  name: 'jay',
  say() { return function () { console.log(this) } }
}

var d = {
  name: 'jay',
  say() { 
    return () => console.log(this) 
}
}

b.say()
c.say()()
d.say()()  