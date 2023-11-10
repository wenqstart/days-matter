import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {EventType} from '../../utils/type';
import _ from 'lodash';
import {
  getEventsFromStorage,
  handleEventList,
  setEventsToStorage,
} from '../../utils';

const initialEventList: EventType[] = [
  {
    id: '1',
    name: 'New Year',
    dateTime: '2024-01-01',
  },
];

// 从内存中加载所有事件
export const loadEvents: any = createAsyncThunk(
  'eventSlice/loadEvents',
  async (payload, thunkAPI) => {
    const currentEvents = await getEventsFromStorage();
    console.log('currentEvents', currentEvents);
    thunkAPI.dispatch(refreshEvent(currentEvents.concat(initialEventList)));
  },
);
export const addEvent: any = createAsyncThunk(
  'eventSlice/addEvent',
  async (payload: EventType, thunkAPI) => {
    const currentEvents = await getEventsFromStorage();
    currentEvents.unshift(payload);
    await setEventsToStorage(currentEvents);
    thunkAPI.dispatch(addDay(payload));
  },
);
export const updateEvent: any = createAsyncThunk(
  'eventSlice/updateEvent',
  async (payload: EventType, thunkAPI) => {
    const currentEvents = await getEventsFromStorage();
    const toUpdateEvent = currentEvents.find(event => event.id === payload.id);
    Object.assign(toUpdateEvent!, payload);
    await setEventsToStorage(currentEvents);
    thunkAPI.dispatch(updateDay(payload));
  },
);
export const deleteEvent: any = createAsyncThunk(
  'eventSlice/deleteEvent',
  async (payload: EventType, thunkAPI) => {
    const currentEvents = await getEventsFromStorage();
    const idx = currentEvents.findIndex(event => event.id === payload.id);
    currentEvents.splice(idx, 1);
    await setEventsToStorage(currentEvents);
    thunkAPI.dispatch(deleteDay(payload));
  },
);
export const {reducer: TodosReducer, actions} = createSlice({
  name: 'event',
  initialState: {
    eventList: initialEventList,
    currentEvent: {},
  },
  reducers: {
    addDay: (state, {payload}) => {
      state.eventList.unshift(payload);
    },
    updateDay: (state, {payload}) => {
      // console.log('payload', payload);
      const toUpdateEvent = state.eventList.find(
        event => event.id === payload.id,
      );
      Object.assign(toUpdateEvent!, payload);
    },
    clearCurrentEvent: state => {
      state.currentEvent = {};
    },
    deleteDay: (state, {payload}) => {
      // state.push(payload.value);
      const idx = state.eventList.findIndex(event => event.id === payload.id);
      state.eventList.splice(idx, 1);
    },
    refreshEvent: (state, {payload}) => {
        console.log('refreshEvent', payload)
      state.eventList = _.cloneDeep(handleEventList(payload));
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
} = actions;
export default TodosReducer;
