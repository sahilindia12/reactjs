import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Slic'

const store = configureStore({
  reducer: {
    counter:counterSlice ,
  }
});

export default store;
