export const combineReducers = (reducers) => (state = {}, action) => {
    const combinedState = {};
    /*
      * 1. looping throuh each reducers
      * 2. if action type is present in the reducer then modify that state
    */
    // eslint-disable-next-line consistent-return
    Object.keys(reducers).forEach((key) => {
      const reducer = reducers[key];
  
      if (typeof reducer !== 'function') {
        // eslint-disable-next-line no-console
        return console.error(`Uncaught TypeError: ${reducer} is not a function.\n\t
        Make sure reducers passed in combineReducer() are executable functions.`);
      }
  
      const processedState = reducer(state[key], action);
      combinedState[key] = processedState;
    });
  
    return combinedState;
  };
  