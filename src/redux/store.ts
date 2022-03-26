import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
import axios from 'axios';

import { updatePost } from './postSlice';

const store = configureStore({
  reducer: {
    post: postReducer,
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// load data from remote
axios.get(process.env.REACT_APP_SRC_JSON as string).then(res => store.dispatch(updatePost(res.data)))