import { createSlice } from '@reduxjs/toolkit'
import { dirType } from "../interface/github"

type challengeType = dirType & {
  readme?: string,
  tag?:string[],
}

const initialState: {
  challenges: challengeType[],
} = {
  challenges: [],
}

export const counterSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    updateChallenges: (state, { payload }) => {
      state.challenges = payload
    },
    updateChallengeItem: (state, { payload }) => {
      state.challenges[payload.index] = payload.item
    }
  },
})

export const { updateChallenges, updateChallengeItem } = counterSlice.actions
export default counterSlice.reducer