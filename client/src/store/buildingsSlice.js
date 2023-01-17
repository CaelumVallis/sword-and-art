import { createSlice } from '@reduxjs/toolkit'

const INITIAL_DATA = {
    //array of cards in hand ids
    inHand: [],

    //arrays of placed hards ids
    resources: [],
    gold: [],
    culture: [],
    science: [],
    war: []
}

const initialState = {
    aliance: {...INITIAL_DATA},
    robloxes: {...INITIAL_DATA},
    zorgs: {...INITIAL_DATA}
}

export const buildingsSlice = createSlice({
  name: 'buildings',
  initialState,
  reducers: {
    addCardToHand: (state, { payload }) => {
      // {
      //   race,
      //   buildingId to add to hand
      // }
      state[payload.race].inHand = [...state[payload.race].inHand, payload.buildingId]
    },
    removeCardFromHand: (state, { payload }) => {
      // {
      //   race,
      //   buildingId to remove from hand
      // }
      state[payload.race].inHand = state[payload.race].inHand.filter((buildingId) => buildingId !== payload.id)
    },
    addCardToField: (state, { payload }) => {
      // {
      //   race,
      //   buildingId to add to table,
      //   field to which building will be added,
      //   (optional) buildingId to replace
      // }

        if (payload.idToReplace) {
            state[payload.race][payload.field] = state[payload.race][payload.field].map((buildingId) => {
                return buildingId === payload.idToReplace ? payload.buildingId : buildingId
            })
            return;
        }

        state[payload.race][payload.field] = [...state[payload.race][payload.field], payload.id]
    }
  },
})

export const { addNewTechnology } = buildingsSlice.actions

export default buildingsSlice.reducer