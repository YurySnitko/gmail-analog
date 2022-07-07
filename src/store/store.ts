import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mailReducer from './reducers/MailsSlice';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/rootSaga';
import paginationReducer from './reducers/PaginationSlice';

const rootReducer = combineReducers({
  mail: mailReducer,
  pagination: paginationReducer,
});

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
