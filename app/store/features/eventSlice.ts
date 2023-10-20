import {createSlice} from '@reduxjs/toolkit';
import {EventType} from '../../utils/type';

const initialState: EventType[] = [
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
  {
    id: '1',
    name: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: '过年',
    days: '73',
    dateTime: '2024-01-01',
  },
];
export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addDay: (state, {payload}) => {
      console.log('payload', payload);
      state.push(payload);
      // state.push(payload.value);
    },
    deleteDay: (state, payload) => {
      // state.push(payload.value);
    },
  },
});

export const {addDay, deleteDay} = eventSlice.actions;
export default eventSlice.reducer;
