import { 
    add_user_service, 
    get_user_service 
} from "@/app/services/user-service";
import { setUsers, addUser } from "./user-slice";

export function get_user_thunk() {
    return async function (dispatch) {
        const response = await get_user_service();
        await dispatch(setUsers(response.result));
    };
}

export function add_user_thunk() {
    return async function (dispatch, getState) {
        const userFormData = getState().users.userForm; // Corrected to 'userForm'
        const response = await add_user_service(userFormData);
        await dispatch(addUser(response.result));
    };
}
