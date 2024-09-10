import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userForm: {},      // Holds user form data
        users: [],         // Stores list of users
        updateForm: {}     // Holds data for user updates (if needed)
    },
    reducers: {
        // Set the user form data
        setUserForm: (state, action) => {
            state.userForm = action.payload;
        },
        // Set the list of users
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        // Set the form data for updating a user
        setUpdateForm: (state, action) => {
            state.updateForm = action.payload;
        },
    },
});

export const { setUserForm, setUsers, setUpdateForm } = usersSlice.actions;
export default usersSlice.reducer;
