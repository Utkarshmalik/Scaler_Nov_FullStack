Fragments

Problem:

When working with React components, there are situations where you want to return multiple elements from a component, but the JSX syntax requires a single parent element. This constraint can lead to unwanted wrapper elements in the HTML structure, making it less clean and semantically meaningful

Solution:

React Fragments provide a solution to this problem. Fragments allow you to group multiple elements without introducing an extra node to the DOM. This helps in maintaining a cleaner HTML structure and avoiding unnecessary nesting. The syntax for fragments can be expressed using the shorthand <>...</> or the full <React.Fragment>...</React.Fragment>

Lazy Loading

Source Code
Bundling is the process of combining multiple source code files into a single, optimized file (the bundle).
The output of the bundling process is a single bundle file

Problem

In a large React application, bundling and serving the entire code upfront can lead to slower initial loading times. This is particularly noticeable when some parts of the application are rarely used or accessed. Loading all components and assets together can result in a larger initial bundle size, causing slower page load times and impacting the overall user experience.

Solution: Lazy Loading in React

In a traditional React application, all components are bundled together, regardless of whether they are needed immediately or not.
This leads to a larger initial bundle size, potentially slowing down the application's load time, especially on slower network connections.

Lazy Loading :

Concept:

Lazy loading involves loading certain parts of the application only when they are required, deferring their loading until the user interacts with or navigates to the specific part of the application.
Components or modules are loaded async

Suspense

<Suspense> component is used to handle loading states, especially when working with lazy-loaded components using React.lazy() and dynamic imports. The fallback prop of <Suspense> allows you to specify a UI that will be displayed while the lazy-loaded component is being loaded.

Class Based Components

class-based components were the primary way of creating components before the introduction of functional components with hooks

In class-based components, you define a class that extends the React.Component class. This class is responsible for managing the component's state and lifecycle methods.

### 1. Class Syntax:

```
 import React, { Component } from 'react';

class MyClassComponent extends Component {
  // Component logic goes here
}

```

### 2. State:

Class components can have local state, which is managed using the this.state object. The state can be initialized in the constructor.

```

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state variables here
    };
  }
}
```

### 3. Lifecycle Methods:

Class components have a series of lifecycle methods that you can override to perform actions at different stages of a component's life. Some commonly used lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.

```
class MyClassComponent extends Component {
  componentDidMount() {
    // Called after the component is inserted into the DOM
  }

  componentDidUpdate(prevProps, prevState) {
    // Called after the component updates
  }

  componentWillUnmount() {
    // Called just before the component is removed from the DOM
  }
}

```

### 4.Event Hanndling

```
class MyClassComponent extends Component {
  handleClick = () => {
    // Handle click event
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

```

### 5. Render Method:

The render method is mandatory in class components. It defines what will be rendered to the DOM based on the component's state and props.

```

class MyClassComponent extends Component {
  render() {
    return (
      <div>
        {/* JSX to be rendered */}
      </div>
    );
  }
}

```

### 6. Props:

Class components receive props as an argument to the constructor and have access to them via this.props. Props are read-only and cannot be modified within the component.

```
class MyClassComponent extends Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

```
