import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import pathReducer from './redirect/redirectSlice';

export const store = configureStore({
  reducer: {
    path: pathReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
