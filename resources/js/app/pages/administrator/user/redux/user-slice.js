import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        userForm: {}, // This is for form data if needed
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        setUserForm: (state, action) => {
            state.userForm = action.payload;
        },
    },
});

export const { setUsers, addUser, setUserForm } = usersSlice.actions;

export default usersSlice.reducer;
