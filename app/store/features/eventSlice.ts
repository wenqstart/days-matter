import {createSlice} from '@reduxjs/toolkit';
import {EventType} from '../../utils/type';
import _ from 'lodash';
import {handleEventList} from '../../utils';

const initialEventList: EventType[] = [
  {
    id: '1',
    name: 'xx生日',
    dateTime: '2023-11-24',
  },
  {
    id: '2',
    name: 'zz生日',
    dateTime: '2023-11-29',
  },
  {
    id: '3',
    name: 'ww生日22',
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
        event => event.id === payload.id,
      );
      Object.assign(updateEvent!, payload);
    },
    clearCurrentEvent: state => {
      state.currentEvent = {};
    },
    deleteDay: (state, payload) => {
      // state.push(payload.value);
    },
    refreshEvent: state => {
      // state = payload
      // state.length = 0
      state.eventList = _.cloneDeep(handleEventList(state.eventList))
    },
    setCurrEvent: (state, {payload}) => {
      state.currentEvent = payload;
    },
  },
});

export const {
  addDay,
  updateDay,
  clearCurrentEvent,
  deleteDay,
  refreshEvent,
  setCurrEvent,
} = eventSlice.actions;
export default eventSlice.reducer;
