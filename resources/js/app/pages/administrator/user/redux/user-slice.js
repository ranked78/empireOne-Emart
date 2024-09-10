import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userForm: {},      
        users: [],         
        updateForm: {}     
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
