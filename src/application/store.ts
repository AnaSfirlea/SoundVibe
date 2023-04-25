import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import { createMiddleware as createPromiseMiddleware } from 'redux-promises';
import thunkMiddleware from 'redux-thunk';

/**
 * Creates and initializes a new Redux store.
 * @param initialState The initial state of the store.
 * @param reducers An external list of reducers.
 * @param middlewares An external list of middlewares.
 */
const createStore = (initialState = {}, reducers = {}, middlewares = []) => {
  const baseMiddlewares = [thunkMiddleware, createPromiseMiddleware()];

  // build up a final list of redux middlewares
  const finalMiddlewares = [...baseMiddlewares, ...middlewares];

  const appReducer = combineReducers({
    ...reducers,
  });

  return createReduxStore(appReducer, initialState, applyMiddleware(...finalMiddlewares));
};

export { createStore };
