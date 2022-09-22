import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import movieSlice from './slices/movieSlice'

export const store = configureStore({
  reducer: {
    currentMovie: movieSlice,
    auth: authSlice,
  },
})