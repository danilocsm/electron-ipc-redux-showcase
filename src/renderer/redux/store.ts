import { configureStore } from '@reduxjs/toolkit';
import commReducer from './reducers/commReducer';

export const store = configureStore({
  reducer: { comm: commReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
