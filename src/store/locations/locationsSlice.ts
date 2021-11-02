import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ILocationModel, LocationsType, TagModelType } from '../../utils/global/interfaces';
import { RootState } from '../store';

export interface ILocationModalState {
  tags: TagModelType;
  locations: LocationsType;
}

const initialState: ILocationModalState = {
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  locations: [
    {
      id: '12',
      title: 'Title 1',
      description: 'Descriptoin',
      city: 'Moscow',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: '11',
      title: 'Title 2',
      description: 'London',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: '142',
      title: 'Title 3',
      description: 'Descriptoin',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: '152',
      title: 'Title 4',
      description: 'Descriptoin',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },

    {
      id: '1asdf2',
      title: 'Title 1',
      description: 'Descriptoin',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: '1adsfasd1',
      title: 'Title 2',
      description: 'Descriptoin',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: '14232',
      title: 'Title 3',
      description: 'Descriptoin',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: '15br2',
      title: 'Title 4',
      description: 'Descriptoin',
      city: 'City',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
  ],
};

export const addLocationModalSlice = createSlice({
  name: 'addLocationModal',
  initialState,
  reducers: {
    setTagsAction: (state, action: PayloadAction<TagModelType>) => {
      state.tags = action.payload;
    },

    addLocationAction: (state, action: PayloadAction<Omit<ILocationModel, 'id'>>) => {
      state.locations.push({ ...action.payload, id: uuidv4() });
    },

    removeLocationAction: (state, action: PayloadAction<string>) => {
      const index = state.locations.findIndex((location) => location.id === action.payload);

      state.locations.splice(index, 1);
    },
  },
});

export const { setTagsAction, addLocationAction, removeLocationAction } =
  addLocationModalSlice.actions;

export const selectorTags = (state: RootState) => state.location.location.tags;
export const selectorLocations = (state: RootState) => state.location.location.locations;
export const selectorWeather = (state: RootState) => state.location.weather;

export default addLocationModalSlice.reducer;
