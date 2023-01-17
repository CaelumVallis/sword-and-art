import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //array with ids of learned technologies
  aliance: [],
  robloxes: [],
  zorgs: []
}

export const scienceProgressSlice = createSlice({
  name: 'scienceProgress',
  initialState,
  reducers: {
    addNewTechnology: (state, { payload }) => {
      state[payload.race] = [...state[payload.race], payload.technologyId]
    }
  },
})

export const { addNewTechnology } = scienceProgressSlice.actions

export default scienceProgressSlice.reducer