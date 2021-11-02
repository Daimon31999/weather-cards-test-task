import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import pathReducer from './redirect/redirectSlice';
import addLocationModalReducer from './locations/locationsSlice';
import weatherReducer from './weater/weaterSlice';

export const store = configureStore({
  reducer: {
    path: pathReducer,
    auth: authReducer,
    location: combineReducers({
      location: addLocationModalReducer,
      weather: weatherReducer,
    }),
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
