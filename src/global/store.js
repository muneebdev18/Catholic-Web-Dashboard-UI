import { configureStore } from '@reduxjs/toolkit';
import screensize from './features/screensize';

export const store = configureStore({
  reducer: {
    screen: screensize
  },
})

export default store;