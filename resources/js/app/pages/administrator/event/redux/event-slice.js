import { createSlice } from "@reduxjs/toolkit";

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split("&")[0];

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        eventForm: {},
        events: [],
        updateForm: {},
    },
    reducers: {
        setEventForm: (state, action) => {
            state.eventForm = action.payload;
        },
        setEvents: (state, action) => {
            state.events = action.payload;
        },
        setUpdateForm: (state, action) => {
            state.updateForm = action.payload;
        },
    },
});

export const { 
    setEventForm, 
    setEvents, 
    setUpdateForm 
} = eventSlice.actions;

export default eventSlice.reducer;
