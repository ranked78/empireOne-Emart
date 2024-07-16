import { appSlice } from './app-slice';

export function set_user_thunk(product_id) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setUser(10));
  
  };
}
