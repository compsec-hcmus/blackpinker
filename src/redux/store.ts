import { configureStore } from '@reduxjs/toolkit'
import challengeSlice from './challengeSlice'

import getDirList from '../utils/listDir';
import readmeContent from '../utils/readmeContent';
import { getTagFromMd, rmTagFromMd } from '../utils/processTagfromMd';
import { updateChallenges, updateChallengeItem } from './challengeSlice';

const store = configureStore({
  reducer: {
    challenges: challengeSlice,
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// load data from api on load
getDirList().then(async res => {
  store.dispatch(updateChallenges(res))

  res.forEach(async (item, index) => {

    const readme = await readmeContent(item.url);

    const tag = getTagFromMd(readme);

    store.dispatch(updateChallengeItem({ item: { ...item, readme: rmTagFromMd(readme), tag: tag ? tag : [] }, index }))
  })
})