// In Lexical Scope, the child scope accesses the variable defined in the parent scope lexically.
//  The lexically means that JavaScript determines the parent scope by looking at where we created the function 
//  and not where we invoked it.

var varName = 10;
function b() {
    console.log("in b",varName);
}


function fn() {
    var varName = 20;
    b();
    console.log(varName); 
}

fn();
