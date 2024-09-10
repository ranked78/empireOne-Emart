import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        eventForm: {},
        events: [],
        updateForm: {}
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
        addEvent: (state, action) => {
            state.events.push(action.payload); // Add a new event to the list
        },
    },
});

export const { 
    setEventForm, 
    setEvents, 
    setUpdateForm, 
    addEvent 
} = eventsSlice.actions;

export default eventsSlice.reducer;
