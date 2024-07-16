import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user:{},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { 
  setUser,
 } = appSlice.actions

export default appSlice.reducer
