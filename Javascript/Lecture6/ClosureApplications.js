//infinite currying

// function counter(args){

//     let count=1;

//     if(args===0){
//         return count;
//     }

//     return function inner(args){

//         count++;

//         if(args===0){
//             return count;
//         }else{
//             return inner;
//         }

//     }

// }



// console.log(counter(0)) // print 1
// console.log(counter()(0))  // print 2
// console.log(counter()()(0))  // print 3
// console.log(counter()()()(0))  // print 4
// console.log(counter()()()()(0))  // print 5




// function sum(args1) {

//     if(!args1){
//         return 0;
//     }

//     let add=args1;


//     return function inner(args2){

//         if(!args2){
//             return add;
//         }else{

//             add+=args2;
//             return inner;
//         }

//     }

// }

// console.log(sum(3)(4)());  // 7

// console.log(sum(3)(7)(8)()); //18 

// console.log(sum(1)(7)(8)(5)()); // 21 

// console.log(sum()); // 0


// Currying involves splitting up a function that accepts multiple arguments into several functions that only accept one parameter each.



/***************Private variables******/

// function createEventStack(){

//     let items=[];

//     return {
//         push(item){
//             items.push(item);
//         },
//         pop(){
//             return items.pop();
//         }
//     }
// }




// const stack = createEventStack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(50);

// stack.pop();
// const poppedElement = stack.pop();

// console.log(poppedElement);

// console.log(stack.items); // prevent this behaviour



/**
 * Memoization : sum calculation take a lot of time  with 
 * */


function memoize(fn){

    let cache={};

    return function(n){

        let isAlreadyComputed  = cache[n]!==undefined;

        if(isAlreadyComputed){
            return cache[n];
        }else{
            const result = fn(n);
            cache[n]=result;
            return result;
        }

    }

}



function calc(n){

    let sum=0;

    for(let i=0;i<n;i++){
        sum+=n;
    }

    return sum;

}


let efficientCalcFn = memoize(calc);


console.time();
efficientCalcFn(10000000);
console.timeEnd();

console.time();
efficientCalcFn(10000000);
console.timeEnd();

