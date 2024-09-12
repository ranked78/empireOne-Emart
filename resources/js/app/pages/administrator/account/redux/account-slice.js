import { createSlice } from "@reduxjs/toolkit";

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split("&")[0];

export const accountSlice = createSlice({
    name: "account",
    initialState: {
        accountForm: {},
        accounts: [],
        updateForm: {}
    },
    reducers: {
        setAccountForm: (state, action) => {
            state.accountForm = action.payload;
        },
        setAccounts: (state, action) => {
            state.accounts = action.payload;
        },
        setUpdateForm: (state, action) => {
            state.updateForm = action.payload;
        },
    },
});

export const { 
    setAccountForm,
    setAccounts,
    setUpdateForm 
} = accountSlice.actions;

export default accountSlice.reducer;
