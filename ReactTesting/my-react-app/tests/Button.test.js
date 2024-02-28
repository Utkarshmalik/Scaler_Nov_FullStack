import Button from "../src/Button";
import {render, screen, fireEvent} from "@testing-library/react"


//Render 
// This is a function provided by testing libraries such as React Testing Library. 
//  Its purpose is to render a React component into a virtual DOM for testing purposes.


test("renders the button with the given text",()=>{

    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();

})


test("calls the onclick handler when the button is clicked",()=>{

      // Arrange
      const onClickMock =  jest.fn();  //Mocking the onclick handler 
      render(<Button text="Click me" onClick={onClickMock}  />); // Rendering the Button component

      //Act 
      const button = screen.getByText("Click me");  // Finding the button by its text content
      fireEvent.click(button);  // Finding the button by its text content


      //Assert
      expect(onClickMock).toHaveBeenCalled(); // Verifying that the onClick handler was called

})


//Screen 

// The screen object is a utility provided by the library to query and interact with the rendered components in your tests. 
// It acts as a representation of the virtual DOM created during the testing process. 
// The screen object provides a set of query functions that make it easy to find and assert on elements within the rendered component.


// screen.getByText: Queries for an element that contains the specified text.


// screen.getByText('Hello, World!');
