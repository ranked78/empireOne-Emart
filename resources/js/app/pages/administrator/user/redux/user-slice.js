import { createSlice } from "@reduxjs/toolkit";

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split("&")[0];

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userForm: {},
        users: [],
        updateForm: {},
    },
    reducers: {
        setUserForm: (state, action) => {
            state.userForm = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setUpdateForm: (state, action) => {
            state.updateForm = action.payload;
        },
    },
});

export const { 
    setUserForm, 
    setUsers, 
    setUpdateForm 
} = userSlice.actions;

export default userSlice.reducer;
