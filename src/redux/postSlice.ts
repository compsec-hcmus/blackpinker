import { createSlice } from '@reduxjs/toolkit'
import { post } from '../interface/post'


const initialState: post = {
  name: "",
  tags: [],
  detail: "",
  list: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePost: (state, { payload }) => {
      state.name = payload.name
      state.tags = payload.tags
      state.detail = payload.detail
      state.list = payload.list
    },
  },
})

export const { updatePost } = postSlice.actions
export default postSlice.reducer