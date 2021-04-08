import { createSlice } from '@reduxjs/toolkit'

const example = [{
    algo_name: "Example Algorithm",
    algo_description: `Here you will see a description of the algorithm you've added.`,
    algo_example: "Here you will see any examples you've uploaded.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    algo_steps: [{
      id: '0',
      item: 'Empty',
    }
    ],
    problem_set: "",
    solve_time_best: 0,
    solve_time_penalty: 0,
    best_plus_penalty: 0,
  }
  ]

export const algorithmsSlice = createSlice({
  name: 'algorithms',
  initialState: {
    value: example,
  },
  reducers: {
    setExampleAlgorithm: (state) => {
      state.value = example
    },
    updateAlgorithms: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateAlgorithms, setExampleAlgorithm } = algorithmsSlice.actions

export default algorithmsSlice.reducer