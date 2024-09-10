import { add_users_service, get_users_service } from "@/app/services/user-service";
import { setUsers, addEvent } from "./user-slice";

export function fetch_users_thunk() {
    return async function (dispatch) {
        const response = await get_users_service();
        await dispatch(setUsers(response.result));
    };
}

export function add_event_thunk() {
    return async function (dispatch, getState) {
        const eventData = getState().users.eventForm; // Assuming eventForm is managed in the state
        const response = await add_users_service(eventData);
        await dispatch(addUsers(response.result));
    };
}
