
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../redux/app-slice';
import inventorySlice from '../pages/inventory/redux/inventory-slice';
const store = configureStore({
    reducer: {
         app: appSlice,
         inventory:inventorySlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
