import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IAuthState {
  path: string;
}

const initialState: IAuthState = {
  path: '',
};

export const redirectSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    redirectAction: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
});

export const { redirectAction } = redirectSlice.actions;

export const selectorPath = (state: RootState) => state.path;

export default redirectSlice.reducer;
