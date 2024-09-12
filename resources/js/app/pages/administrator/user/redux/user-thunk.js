import {
    add_user_service,
    delete_user_service,
    get_user_service,
    update_user_service,
} from "@/app/services/user-service";
import { userSlice } from "./user-slice";

export function add_user_thunk() {
    return async function (dispatch, getState) {
        const data = getState().user.userForm;
        const response = await add_user_service(data);
        await dispatch(
            userSlice.actions.setUsers(response.result)
        );
    };
}

export function get_user_thunk() {
    return async function (dispatch, getState) {
        const users = getState().user.users;
        const response = await get_user_service();
        await dispatch(
            userSlice.actions.setUsers(response.result)
        );
    };
}

export function update_user_thunk() {
    return async function (dispatch, getState) {
        const updateForm = getState().user.updateForm;
        const response = await update_user_service(updateForm);
        await dispatch(
            userSlice.actions.setUsers(response.result)
        );
    };
}

export function delete_user_thunk(id) {
    return async function (dispatch) {
        try {
            const response = await delete_user_service(id);
            dispatch(userSlice.actions.setUsers(response.result));
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };
}
