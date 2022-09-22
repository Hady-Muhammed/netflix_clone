import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMovie: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    SET_CURRENT_MOVIE(state,{type , payload}) {
        state.currentMovie = payload;
    }
  }
});

export const {SET_CURRENT_MOVIE} = movieSlice.actions

export default movieSlice.reducer