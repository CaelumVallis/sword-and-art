import { configureStore } from '@reduxjs/toolkit'
import scienceProgressReducer from './scienceProgressSlice'
import playersDataReducer from './playersDataSlice'
import buildingsReducer from './buildingsSlice'

export default configureStore({
  reducer: {
    scienceProgress: scienceProgressReducer,
    playersData: playersDataReducer,
    buildings: buildingsReducer
  },
})