import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';

import { todosReducer } from './todos';
import { userReducer } from './user';
import { dialogReducer } from './dialog';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
    dialog: dialogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware),
  // .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension');
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };
