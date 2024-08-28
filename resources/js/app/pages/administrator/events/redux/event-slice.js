import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        eventForm: {}, // This is for form data if needed
    },
    reducers: {
        setEvents: (state, action) => {
            state.events = action.payload;
        },
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        setEventForm: (state, action) => {
            state.eventForm = action.payload;
        },
    },
});

export const { setEvents, addEvent, setEventForm } = eventsSlice.actions;

export default eventsSlice.reducer;
