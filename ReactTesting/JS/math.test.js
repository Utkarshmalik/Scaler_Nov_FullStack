

const factorial = require("./math");


// Test case 1

test("calculates the factorial of 0 to be 1",()=>{
    expect(factorial(0)).toBe(1);
})


// Test case 2
test('calculates the factorial of 1 to be 1', () => {
  expect(factorial(1)).toBe(1);
});



// Test case 3
test('calculates the factorial of 5 to be 120', () => {
  expect(factorial(5)).toBe(120);
});

// Test case 4
test('calculates the factorial of 10 to be 3628800', () => {
  expect(factorial(10)).toBe(3628800);
});
