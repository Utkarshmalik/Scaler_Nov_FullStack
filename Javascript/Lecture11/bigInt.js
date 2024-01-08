

// You can create a BigInt by appending an n to the end of an integer literal or
// by using the BigInt() constructor


// const bigIntLiteral = 123n;
// const fromConstructor = BigInt(456);


// 2 ^ 63 -1


const largeNumber = 12345678901234567890890n;
const fromString = BigInt("98765432109609876543213412124124210");


const product = largeNumber * fromString;
console.log("Product:", product);
