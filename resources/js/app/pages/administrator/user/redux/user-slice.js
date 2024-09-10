import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        eventForm: {}, // This is for form data if needed
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        addEvent: (state, action) => {
            state.users.push(action.payload);
        },
        setEventForm: (state, action) => {
            state.eventForm = action.payload;
        },
    },
});

export const { setUsers, addEvent, setEventForm } = usersSlice.actions;

export default usersSlice.reducer;
