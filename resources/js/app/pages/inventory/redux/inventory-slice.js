import { createSlice } from "@reduxjs/toolkit";

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split("&")[0];

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        inventoryForm: {},
        inventories:[],
        updateForm:{}
    },
    reducers: {
        setInventoryForm: (state, action) => {
            state.inventoryForm = action.payload;
        },
        setInventories: (state, action) => {
            state.inventories = action.payload;
        },
        setUpdateForm:(state, action) => {
            state.updateForm = action.payload;
        },
    },
});
export const { 
    setInventoryForm,
    setInventories,
    setUpdateForm } = inventorySlice.actions;

export default inventorySlice.reducer;
