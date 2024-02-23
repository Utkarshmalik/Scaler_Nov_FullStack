


const loggingMiddleware = store => next => action => {

  console.log('--- Logging Middleware ---');
  console.log('Dispatching Action:', action);
  console.log('Current State:', store.getState());

  //When next(action) is called, it hands over control to the next middleware in the chain. This is essential for the middleware chain to function correctly.

  next(action);


  console.log('Updated State:', store.getState());
  console.log('--- End Logging Middleware ---\n');

}

export default loggingMiddleware;