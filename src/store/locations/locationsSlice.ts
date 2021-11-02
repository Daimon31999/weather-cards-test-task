import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { message as AntdMessage } from 'antd';
import { fetchWeatherByCityNameRequest } from '../../api/requests';
import { ILocationModel, LocationsType, TagModelType } from '../../utils/global/interfaces';
import { RootState } from '../store';
import { messages } from '../../utils';

export interface ILocationModalState {
  tags: TagModelType;
  locations: LocationsType;
  status: 'loading' | 'idle';
}

const initialState: ILocationModalState = {
  tags: [],
  locations: [],
  status: 'idle',
};

const { getWeatherFailed } = messages.alerts.error;

export const addLocationAction = createAsyncThunk(
  'weather/fetchWeatherByCityName',
  async (location: Omit<ILocationModel, 'id' | 'weather'>) => {
    const response = await fetchWeatherByCityNameRequest(location.city);

    return {
      ...location,
      id: uuidv4(),
      weather: response.data,
    };
  },
);

export const addLocationModalSlice = createSlice({
  name: 'addLocationModal',
  initialState,
  reducers: {
    setTagsAction: (state, action: PayloadAction<TagModelType>) => {
      state.tags = action.payload;
    },

    removeLocationAction: (state, action: PayloadAction<string>) => {
      const index = state.locations.findIndex((location) => location.id === action.payload);

      state.locations.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addLocationAction.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(addLocationAction.fulfilled, (state, action) => {
      state.status = 'idle';
      state.locations.push(action.payload);
    });

    builder.addCase(addLocationAction.rejected, (state) => {
      state.status = 'idle';
      AntdMessage.error(getWeatherFailed);
    });
  },
});

export const { setTagsAction, removeLocationAction } = addLocationModalSlice.actions;

export const selectorTags = (state: RootState) => state.location.tags;
export const selectorLocation = (state: RootState) => state.location;

export default addLocationModalSlice.reducer;
