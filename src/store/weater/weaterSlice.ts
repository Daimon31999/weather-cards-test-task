import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message as AntdMessage } from 'antd';
import { IOpenWeatherResponseModel } from '../../api/openWeather';

import { fetchWeatherByCountryNameRequest } from '../../api/requests';
import { WeatherType } from '../../types/weater';
import { messages } from '../../utils';
import { OpenWeatherModelType } from '../../utils/global/interfaces';
import { RootState } from '../store';

export interface IWeatherState {
  weatherData: OpenWeatherModelType;
  status: 'loading' | 'idle';
}

const initialState: IWeatherState = {
  weatherData: null,
  status: 'idle',
};

const { getWeatherFailed } = messages.alerts.error;

export const getWeatherByCountryName = createAsyncThunk(
  'weather/fetchWeatherByCountryName',
  async (countryName: string) => {
    const response = await fetchWeatherByCountryNameRequest(countryName);

    return response.data;
  },
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherByCountryName.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getWeatherByCountryName.fulfilled, (state, action) => {
      state.status = 'idle';
      state.weatherData = action.payload;
    });

    builder.addCase(getWeatherByCountryName.rejected, (state) => {
      state.status = 'idle';
      AntdMessage.error(getWeatherFailed);
    });
  },
});

// export const { logInAction, logOutAction } = weatherSlice.actions;

export default weatherSlice.reducer;
