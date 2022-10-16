import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-store';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// for gatsby because it is not spa
export const createStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
    },
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
