import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import pathReducer from './redirect/redirectSlice';
import addLocationModalReducer from './locations/locationsSlice';

export const store = configureStore({
  reducer: {
    path: pathReducer,
    auth: authReducer,
    location: addLocationModalReducer,
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
