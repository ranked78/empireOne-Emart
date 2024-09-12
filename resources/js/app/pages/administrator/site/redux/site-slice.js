import { createSlice } from "@reduxjs/toolkit";

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split("&")[0];

export const siteSlice = createSlice({
    name: "site",
    initialState: {
        siteForm: {},
        sites: [],
        updateForm: {},
    },
    reducers: {
        setSiteForm: (state, action) => {
            state.siteForm = action.payload;
        },
        setSites: (state, action) => {
            state.sites = action.payload;
        },
        setUpdateForm: (state, action) => {
            state.updateForm = action.payload;
        },
    },
});

export const { 
    setSiteForm, 
    setSites, 
    setUpdateForm 
} = siteSlice.actions;

export default siteSlice.reducer;
