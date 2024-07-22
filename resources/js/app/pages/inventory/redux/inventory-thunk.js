import {
    add_inventory_service,
    get_inventory_service,
    update_inventory_service,
} from "@/app/services/inventory-service";
import { inventorySlice } from "./inventory-slice";

export function add_inventory_thunk() {
    return async function (dispatch, getState) {
        const data = getState().inventory.inventoryForm;
        const response = await add_inventory_service(data);
        await dispatch(
            inventorySlice.actions.setInventories(response.result)
        );
    };
}

export function get_inventory_thunk() {
    return async function (dispatch, getState) {
        const inventories = getState().inventory.inventories;
        const response = await get_inventory_service();
        await dispatch(
            inventorySlice.actions.setInventories(response.result)
        );
    };
}

export function update_inventory_thunk() {
    return async function (dispatch, getState) {
        const updateForm = getState().inventory.updateForm;
        const response = await update_inventory_service(updateForm);
        await dispatch(
            inventorySlice.actions.setInventories(response.result)
        );
    };
}

