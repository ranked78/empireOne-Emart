import { 
    add_user_service, 
    get_user_service, 
    update_user_service, 
    delete_user_service 
} from "@/app/services/user-service";
import { usersSlice } from "./user-slice";


export function get_user_thunk() {
    return async function (dispatch, getState) {
        const response = await get_user_service();
        dispatch(usersSlice.actions.setUsers(response.result));
    };
}


export function add_user_thunk() {
    return async function (dispatch, getState) {
        const data = getState().users.userForm;
        const response = await add_user_service(data);
        dispatch(usersSlice.actions.setUsers(response.result)); 
    };
}


export function update_user_thunk() {
    return async function (dispatch, getState) {
        const updateForm = getState().users.updateForm;
        const response = await update_user_service(updateForm);
        dispatch(usersSlice.actions.setUsers(response.result)); 
    };
}


export function delete_user_thunk(id) {
    return async function (dispatch) {
        try {
            const response = await delete_user_service(id);
            dispatch(usersSlice.actions.setUsers(response.result)); // Sync with updated list of users
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };
}
