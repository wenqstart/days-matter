import {combineReducers, configureStore} from '@reduxjs/toolkit';
import eventReducer from './features/eventSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const reducer = combineReducers({
  event: eventReducer,
});
const persistConfig = {
  key: 'wqstart',
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
