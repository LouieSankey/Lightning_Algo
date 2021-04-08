import { configureStore } from '@reduxjs/toolkit'
import renameProblemSetSlice from './features/renameProblemSetSlice'
import updateAlgoIndexSlice from './features/updateAlgoIndexSlice'
import updateStepsSlice from './features/updateStepsSlice'
import algorithmsSlice from './features/algorithmSlice'

export default configureStore({
  reducer: {
      currentProblemSet: renameProblemSetSlice,
      algoIndex: updateAlgoIndexSlice,
      steps: updateStepsSlice,
      algorithms: algorithmsSlice
  },
})