import { createSlice } from '@reduxjs/toolkit'

export const renameProblemSetSlice = createSlice({
  name: 'renameProblemSet',
  initialState: {
    value: 'Create a New Problem Set',
  },
  reducers: {
    renameProblemSet: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { renameProblemSet } = renameProblemSetSlice.actions

export default renameProblemSetSlice.reducer