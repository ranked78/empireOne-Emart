import { createSlice } from "@reduxjs/toolkit";

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split("&")[0];

export const indexSlice = createSlice({
    name: "index",
    initialState: {
        inventoryForm: {},
        inventories:[]
    },
    reducers: {
        setInventoryForm: (state, action) => {
            state.inventoryForm = action.payload;
        },
        setInventories: (state, action) => {
            state.inventories = action.payload;
        },
    },
});
export const { setInventoryForm,setInventories } = indexSlice.actions;

export default indexSlice.reducer;
