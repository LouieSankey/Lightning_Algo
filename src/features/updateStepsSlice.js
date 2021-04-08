import { createSlice } from '@reduxjs/toolkit'

export const updateStepsSlice = createSlice({
  name: 'updateSteps',
  initialState: {
    value: [{
        id: '0',
        item: 'Empty',
      }
    ],
  },
  reducers: {
    updateSteps: (state, action) => {
        state.value = action.payload
      }
   
  },
})

export const { updateSteps } = updateStepsSlice.actions

export default updateStepsSlice.reducer