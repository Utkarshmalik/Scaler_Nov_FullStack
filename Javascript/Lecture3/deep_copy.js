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


}


let clonedPerson = clone(person);
clonedPerson.friends[3].age=54;
console.log(person);
console.log(clonedPerson);
