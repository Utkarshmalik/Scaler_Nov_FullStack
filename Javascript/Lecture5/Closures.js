// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }


// const innerFunc = outerFunction();
// console.log(innerFunc())
// console.log(innerFunc())


// Closure is a JavaScript lexical scoping technique used to preserve variables from a function's outer scope in its inner scope.


/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent 
 * even if outer fn is removed from the stack . (only if outer variable is used inside)
 *  When closure is fromed -> when a inner fn is hoisted it form closure over outer variable
 * */



// function grandParent(a){
    

//     function parent(b){


//         function child(c){

//             return a+b+c;

//         }

//         return child;
//     }

//     return parent;
// }


// const ans=grandParent(5)(6)(7);
// console.log(ans);


// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init
//     }
//     return count
// }
// let c1 = createCounter(10,5)
// let c2 = createCounter(5,2)



// console.log(c1())
// console.log(c2())
// console.log(c1())
// console.log(c2())




/**
 * Every code is executed in an EC : 
 * 1. this
 * 2. local fn and var 
 * 3. global,window obj 
 * 4. lexical scope
 * 5. closure -> till GEC
 * 
 * */



// Nested Closures

let iamINGEC = 200;
function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);  
            console.log("Hi GEC", iamINGEC) 
        }
    }
}


const fnNameRtrn = getFirstName("Jasbir");
// console.dir(fnNameRtrn);


const lnNameRtrn = fnNameRtrn("Singh");
// console.dir(lnNameRtrn);


lnNameRtrn();
