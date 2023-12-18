// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};


function clone(obj){

    let newObj={};

    for(let key in obj){

        if(typeof obj[key]==='object'){

            let innerCopiedObject  =  clone(obj[key]);

            if(Array.isArray(obj[key])){

                newObj[key] = Object.values(innerCopiedObject);

            }else{
                newObj[key] =  innerCopiedObject;
            }

        }else{
           newObj[key] = obj[key];
        }
    }


    return newObj;
}


let clonedPerson = clone(person);
clonedPerson.friends[3].age=54;
console.log(person);
console.log(clonedPerson);
