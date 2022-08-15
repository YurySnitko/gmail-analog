import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mailReducer from './reducers/MailsSlice';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/rootSaga';
import paginationReducer from './reducers/PaginationSlice';
import filterValueReducer from './reducers/FilterValuesSlice';
import settingsReducer from './reducers/SettingsSlice';
import themeReducer from './reducers/ThemeSlice';

const rootReducer = combineReducers({
  mail: mailReducer,
  pagination: paginationReducer,
  filters: filterValueReducer,
  settings: settingsReducer,
  theme: themeReducer,
});

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
