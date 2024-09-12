
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../redux/app-slice';
import inventorySlice from '../pages/administrator/inventory/redux/inventory-slice';
import accountSlice from '../pages/administrator/account/redux/account-slice';
import siteSlice from '../pages/administrator/site/redux/site-slice';
import eventSlice from '../pages/administrator/event/redux/event-slice';
import userSlice from '../pages/administrator/user/redux/user-slice';
const store = configureStore({
    reducer: {
         app: appSlice,
         inventory:inventorySlice,
         event: eventSlice,
         user:userSlice,
         account:accountSlice,
         site:siteSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
