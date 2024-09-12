import {
    add_event_service,
    delete_event_service,
    get_event_service,
    update_event_service,
} from "@/app/services/event-service";
import { eventSlice } from "./event-slice";

export function add_event_thunk() {
    return async function (dispatch, getState) {
        const data = getState().event.eventForm;
        const response = await add_event_service(data);
        await dispatch(
            eventSlice.actions.setEvents(response.result)
        );
    };
}

export function get_event_thunk() {
    return async function (dispatch, getState) {
        const events = getState().event.events;
        const response = await get_event_service();
        await dispatch(
            eventSlice.actions.setEvents(response.result)
        );
    };
}

export function update_event_thunk() {
    return async function (dispatch, getState) {
        const updateForm = getState().event.updateForm;
        const response = await update_event_service(updateForm);
        await dispatch(
            eventSlice.actions.setEvents(response.result)
        );
    };
}

export function delete_event_thunk(id) {
    return async function (dispatch) {
        try {
            const response = await delete_event_service(id);
            dispatch(eventSlice.actions.setEvents(response.result));
        } catch (error) {
            console.error("Failed to delete event:", error);
        }
    };
}
