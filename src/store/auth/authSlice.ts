import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message as AntdMessage } from 'antd';

import { messages, VALID_PASSWORD, VALID_USER_NAME } from '../../utils';
import { getUserAuthenticatedState, setUserAuthenticatedState } from '../../utils/global/helpers';
import { IAuthPayload } from '../../utils/global/interfaces';
import { RootState } from '../store';

export interface IAuthState {
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  isLoggedIn: getUserAuthenticatedState(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInAction: (state, action: PayloadAction<IAuthPayload>) => {
      const { userName, password } = action.payload;
      const { authError } = messages.alerts.error;

      if (userName === VALID_USER_NAME && password === VALID_PASSWORD) {
        setUserAuthenticatedState(true);
        state.isLoggedIn = true;

        return;
      }

      AntdMessage.error(authError);
    },

    logOutAction: (state) => {
      setUserAuthenticatedState(false);
      state.isLoggedIn = false;
    },
  },
});

export const { logInAction, logOutAction } = authSlice.actions;

export const selectorAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
