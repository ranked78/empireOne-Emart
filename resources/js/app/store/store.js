
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../redux/app-slice';
import inventorySlice from '../pages/administrator/inventory/redux/inventory-slice';
import eventsSlice from '../pages/administrator/event/redux/event-slice';
const store = configureStore({
    reducer: {
         app: appSlice,
         inventory:inventorySlice,
         events: eventsSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
