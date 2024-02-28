import Counter from "../src/Counter";
import {render, screen, fireEvent} from "@testing-library/react"


test("renders initial count of 0",()=>{

    render(<Counter/>);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

})



test("increment count when Increment button is clicked",()=>{

    render(<Counter/>);

    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);

   expect(screen.getByText('Count: 1')).toBeInTheDocument();

})



test("decrement count when Decrement button is clicked",()=>{

    render(<Counter/>);

    const decrementButton = screen.getByText('Decrement');
    // screen.getByLabelText();
    fireEvent.click(decrementButton);

   expect(screen.getByText('Count: -1')).toBeInTheDocument();

})








// Using Different Labels:

// const Counter = () => {
//   return (
//     <div>
//       <p>Count: 0</p>
//       <label htmlFor="incrementButton">Increment</label>
//       <button id="incrementButton" onClick={() => { /* Increment logic */ }}>Increment</button>
//     </div>
//   );
// };

// // Test
// test('finds the Increment button by label', () => {
//   render(<Counter />);
//   const incrementButton = screen.getByLabelText('Increment');
//   fireEvent.click(incrementButton);
//   // Your assertions...
// });




// const Counter = () => {
//   return (
//     <div>
//       <p>Count: 0</p>
//       <button onClick={() => { /* Increment logic */ }}>Increment</button>
//       <button onClick={() => { /* Another button logic */ }}>Increment</button>
//     </div>
//   );
// };

// // Test
// test('finds the correct Increment button by text content', () => {
//   render(<Counter />);
//   const firstIncrementButton = screen.getByText('Increment', { selector: 'button' });
//   fireEvent.click(firstIncrementButton);
//   // Your assertions...

//   const secondIncrementButton = screen.getByText('Increment', { selector: 'button' });
//   fireEvent.click(secondIncrementButton);
//   // Your assertions for the second button...
// });


// Example Component
// const Counter = () => {
//   return (
//     <div>
//       <p>Count: 0</p>
//       <button data-testid="incrementButton" onClick={() => { /* Increment logic */ }}>Increment</button>
//       <button data-testid="anotherButton" onClick={() => { /* Another button logic */ }}>Increment</button>
//     </div>
//   );
// };

// // Test
// test('finds the correct Increment button by data-testid', () => {
//   render(<Counter />);
//   const incrementButton = screen.getByTestId('incrementButton');
//   fireEvent.click(incrementButton);
//   // Your assertions...

//   const anotherButton = screen.getByTestId('anotherButton');
//   fireEvent.click(anotherButton);
//   // Your assertions for the second button...
// });