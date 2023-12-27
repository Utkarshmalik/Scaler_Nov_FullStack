// METADATA -> object descriptors 




let obj = {
    name:"Utkarsh",
    age:29,
    address:{
        city:"Gurgaon",
        houseNumber:37
    }
}


//value : value of that property
//writable : can you change  it
//enumerable : can you iterate over it


// Object.defineProperty(obj,'test',{

//     value:"fail",
//     writable : false,
//     enumerable:false
// })


// obj.test="test1434";

// console.log(obj);

// console.log(Object.keys(obj));



//Object.freeze 


// const frozenObj  = Object.freeze(obj);


// frozenObj.age=30;
// frozenObj.test="fail"

// frozenObj.address.country = "India";

// console.log(frozenObj);


//Shallow Freezing





//Object.seal




let obj1 = {
    name:"Utkarsh",
    age:29,
    address:{
        city:"Gurgaon",
        houseNumber:37
    }
}


const sealedObj   = Object.seal(obj1);

sealedObj.height=183;
sealedObj.age=30;

console.log(sealedObj);