

// We use call when we want to borrow a method only once with a defined number of parameters.


const parent = {
  health: 50,
  addHealth: function(num1, num2) {
    console.log(this);
    this.health += num1 + num2;
  }
}

//method borrowing

const child = {
  health: 70
}



// console.log(parent.addHealth(10,20));


parent.addHealth(10,20);
parent.addHealth.call(child, 10,20);


// We use apply when we want to borrow a method only once with n number of parameters.

// parent.addHealth.apply(child, [30,40]);

// console.log(child.health);





// let cap = {
//     name: "Steve",
//     team: "Cap",
//     petersTeam: function (mem1, mem2, ...otherMem) {
//         console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
//     }
// }

// let ironMan = {
//     name: "Tony",
//     team: "Iron Man"
// }

// cap.petersTeam("Utkarsh","Rahul","Jai");

// cap.petersTeam.call(ironMan,"Utkarsh","Rahul","Shreya");


// We use bind when we want to use a method multiple times and we want to make a permanent copy of that method.


// const importantFn  = cap.petersTeam.bind(ironMan,"Utkarsh","Rahul","Shreya");

// const importantFn = cap.petersTeam.bind(ironMan);

// // //10000 years

// importantFn("Utkarsh", "Rahul", "Jay");







// function logThis() { 
    
//     console.log(this);
// }



// const myObj = {
    
//     name: "sag1v"
// }



// logThis.call(myObj);



// const logThis = () => { 
//     console.log(this);
// }

// const myObj = {
    
//     name: "sag1v"

// }
// logThis.call(myObj)