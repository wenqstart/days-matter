import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import eventReducer from './features/eventSlice';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const reducer = combineReducers({
  event: eventReducer,
});
const persistConfig = {
  key: 'wqstart',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware(), logger]

});
export const persistor = persistStore(store);
export default store;
