import {createSlice} from '@reduxjs/toolkit';
import {EventType} from '../../utils/type';
import _ from 'lodash';

const initialEventList: EventType[] = [
  {
    id: '1',
    name: 'xx生日',
    showName: 'xx生日',
    days: '35',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: 'zz生日',
    showName: 'zz生日',
    days: '36',
    dateTime: '2023-11-29',
  },
  {
    id: '3',
    name: 'ww生日22',
    showName: 'ww生日22',
    days: '39',
    dateTime: '2023-11-30',
  },
];
export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    eventList: initialEventList,
    currentEvent: {},
  },
  reducers: {
    addDay: (state, {payload}) => {
      console.log('payload', payload);
      state.eventList.unshift(payload);
    },
    updateDay: (state, {payload}) => {
      console.log('payload', payload);
      const updateEvent = state.eventList.find(
        event => (event.id = payload.id),
      );
      Object.assign(updateEvent!, payload);
    },
    clearCurrentEvent: state => {
      state.currentEvent = {};
    },
    deleteDay: (state, payload) => {
      // state.push(payload.value);
    },
    refreshEvent: (state, {payload}) => {
      console.log('payload', payload);
      console.log('payload', _.cloneDeep(payload));
      // state = payload
      // state.length = 0
      // state.eventList = _.cloneDeep(payload);
    },
    setCurrEvent: (state, {payload}) => {
      state.currentEvent = payload;
    },
  },
});

export const {addDay,updateDay,clearCurrentEvent,  deleteDay, refreshEvent, setCurrEvent} =
  eventSlice.actions;
export default eventSlice.reducer;
