import {
    add_events_service,
    get_events_service,
    update_events_service,
    // delete_events_service
} from "@/app/services/event-service";
import { eventsSlice } from "./event-slice";

export function get_event_thunk() {
    return async function (dispatch) {
        try {
            const response = await get_events_service();
            dispatch(eventsSlice.actions.setEvents(response.result)); // Dispatch the action to store the events
        } catch (error) {
            console.error("Failed to fetch events", error); // Handle any errors
        }
    };
}

export function add_event_thunk() {
    return async function (dispatch, getState) {
        try {
            const eventData = getState().events.eventForm; // Get the event form data from the Redux state
            const response = await add_events_service(eventData); // Make the API call to add the event
            dispatch(eventsSlice.actions.addEvent(response.result)); // Dispatch the action to add the new event
        } catch (error) {
            console.error("Failed to add event", error); // Handle any errors
        }
    };
}

export function update_event_thunk() {
    return async function (dispatch, getState) {
        try {
            const updateForm = getState().events.updateForm;
            const response = await update_events_service(updateForm);
            dispatch(eventsSlice.actions.setEvents(response.result)); // Update the events list
        } catch (error) {
            console.error("Failed to update event", error); // Handle any errors
        }
    };
}

export function delete_event_thunk(id) {
    return async function (dispatch) {
        try {
            const response = await delete_events_service(id);
            dispatch(eventsSlice.actions.setEvents(response.result)); // Update the events list
        } catch (error) {
            console.error("Failed to delete event:", error); // Handle any errors
        }
    };
}
