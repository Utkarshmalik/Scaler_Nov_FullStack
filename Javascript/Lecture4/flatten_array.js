// Create JavaScript function called flatten that takes a nested array as input 
//and transforms it into a single-level array containing all the numbers from the input array

// input  -> nested array
// let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]


Array.prototype.flatten = function(){

    let newArr=[];

    for(let i=0;i<this.length;i++){

        if(Array.isArray(this[i])){

            let innerFlattenedArr = this[i].flatten();

            newArr.push(...innerFlattenedArr);

        }else{
            newArr.push(this[i]);
        }
    }
    return newArr;

}



let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

let output = input.flatten();

console.log(output);

