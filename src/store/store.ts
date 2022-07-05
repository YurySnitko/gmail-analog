import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mailReducer from './reducers/MailsSlice';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/rootSaga';

const rootReducer = combineReducers({
  mailReducer,
});

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
//export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
