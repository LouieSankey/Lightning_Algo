import { createSlice } from '@reduxjs/toolkit'

export const updateAlgoIndexSlice = createSlice({
  name: 'updateAlgoIndex',
  initialState: {
    value: 0,
  },
  reducers: {
    reset: (state) => {
        state.value = 0
      },
    increment: (state) => {
      state.value = state.value + 1
    }
  },
})

export const { reset, increment } = updateAlgoIndexSlice.actions

export default updateAlgoIndexSlice.reducer