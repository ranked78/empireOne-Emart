import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userForm: {},      
        users: [],         
        updateForm: {}     
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

export const { setUserForm, setUsers, setUpdateForm } = usersSlice.actions;
export default usersSlice.reducer;
