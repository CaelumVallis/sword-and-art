import { createSlice } from '@reduxjs/toolkit'

const INITIAL_DATA = {
    level: 0,
    health: 0,
    warPoints: {
        yellow: 0,
        orange: 0,
        red: 0
    },
    points: {
        culture: 0,
        science: 0
    },
    resources: {
        gold: 0,
        crystals: 0,
        gas: 0,
        oil: 0,
        plasma: 0,
        uranium: 0
    },
    // cultureImpact: {}
};

const initialState = {
    aliance: {...INITIAL_DATA},
    robloxes: {...INITIAL_DATA},
    zorgs: {...INITIAL_DATA}
}

export const playersDataSlice = createSlice({
  name: 'playersData',
  initialState,
  reducers: {
    // addNewTechnology: (state, { payload }) => {
    //   state[payload.race] = [...state[payload.race], payload.technologyId]
    // }
  },
})

export const { addNewTechnology } = playersDataSlice.actions

export default playersDataSlice.reducer