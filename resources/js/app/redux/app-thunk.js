import { get_user_service } from "../services/user-service";
import {appSlice} from "./app-slice";

export function get_user_thunk() {
    return async function (dispatch, getState) {
        const response = await get_user_service();
        await dispatch(
            appSlice.actions.setUser(response)
        );
    };
}