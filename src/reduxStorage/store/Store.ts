import {configureStore} from '@reduxjs/toolkit';
import profileReducer from '../slice/UserProfile';

const store = configureStore({
  reducer: {
    profileReducer: profileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
