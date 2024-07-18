
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../redux/app-slice';
import indexSlice from '../pages/index/redux/index-slice';
const store = configureStore({
    reducer: {
         app: appSlice,
         index:indexSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
