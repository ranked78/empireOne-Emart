
import { add_events_service, get_events_service } from "@/app/services/events-service";
import { setEvents, addEvent } from "./events-slice";

export function fetch_events_thunk() {
    return async function (dispatch) {
        const response = await get_events_service();
        await dispatch(setEvents(response.result));
    };
}

export function add_event_thunk() {
    return async function (dispatch, getState) {
        const eventData = getState().events.eventForm; // Assuming eventForm is managed in the state
        const response = await add_events_service(eventData);
        await dispatch(addEvent(response.result));
    };
}
