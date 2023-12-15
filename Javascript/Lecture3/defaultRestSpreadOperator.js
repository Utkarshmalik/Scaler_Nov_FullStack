//default parameters


// function sum(a,b,c=0){
//     return a+b+c;
// }


// console.log(sum(5,3));
// console.log(sum(5,3,5));


// let arr=[1,4,5,6,7,8,2];
// console.log(Math.max(...arr));



// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// // let newArray = [1, ...arr1, 4,5, ...arr2, 10];

// console.log(Math.max(...arr1, ...arr2));



// let person1={
//     name:"Utkarsh",
//     age:29
// }


// let person2 = person1;

// person2.age++;

// console.log(person1.age);
// console.log(person2.age);



// let person2 = {...person1};

// console.log(person2);
// person2.age++;
// console.log(person1.age);
// console.log(person2.age);



/*****
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same references
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy :
 *  value -> values will be copied and they have diff mem
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */


// let husband = {
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };


// let wife = {...husband};

// // console.log(husband);
// // console.log(wife);

// wife.address.country = 'India';


// console.log(husband===wife);

// console.log(husband.address === wife.address);


// let arr = [1, 2, 3, 4, [10, 12], 5, 6];

// let arr2=[...arr];

// arr2[4].push(70);

// console.log(arr);
// console.log(arr2);



/**Object.assign**/


// let husband = {
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };



// let wife  = Object.assign({}, husband);


//  wife.address.country="India";


//  console.log(husband);
// console.log(wife);



/**
 * Deep Copy : JSON.stringify and JSON.parse
 *
 * */


// let husband = {
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };


// let husbandJSON = JSON.stringify(husband);
// let wife = JSON.parse(husbandJSON);


// wife.address.country = "India";

// console.log(husband);
// console.log(wife);



// rest is used to collect n number of params. 
// Syntax of rest and spread are the same, but the places where it was used are different. 
// rest is used while accepting parameters in a function.




function sum(...args){

    let ans=0;

    args.forEach((element)=>{
        ans+=element;
    })

    return ans;
}




console.log(sum(5,3));
console.log(sum(5,3,5));
console.log(sum(5,3,5,40));
console.log(sum(5,3,5,13,445));
