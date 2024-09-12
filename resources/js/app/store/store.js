
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../redux/app-slice';
import inventorySlice from '../pages/administrator/inventory/redux/inventory-slice';
import eventsSlice from '../pages/administrator/event/redux/event-slice';
import usersSlice  from '../pages/administrator/user/redux/user-slice';
import accountSlice from '../pages/administrator/account/redux/account-slice';
const store = configureStore({
    reducer: {
         app: appSlice,
         inventory:inventorySlice,
         events: eventsSlice,
         users:usersSlice,
         account:accountSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
