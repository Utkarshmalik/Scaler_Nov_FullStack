
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  }
}


// testEnvironment: 'jsdom':
// Jest needs to simulate a browser environment for testing React components. 
// 'jsdom' is the test environment provided by JSDOM (JavaScript DOM), a pure JavaScript implementation of the DOM. 
// This setting ensures that Jest uses JSDOM to emulate a browser-like environment when running tests.


/*

setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']:

Jest allows you to run setup code before each test suite. 

In this case, setupFilesAfterEnv specifies an array of setup files that should be executed after the testing environment is set up but before each test.

'@testing-library/jest-dom/extend-expect' is a setup file provided by the @testing-library/jest-dom library. It extends Jest's expectations (assertions) with additional matchers that are specifically designed for testing React components using the Testing Library.

The extend-expect setup file enables you to use helpful matchers like toBeInTheDocument, toHaveTextContent, and others, which are commonly used when testing React components with the React Testing Library.



*/
