import {
    add_inventory_service,
    get_inventory_service,
} from "@/app/services/inventory-service";
import { indexSlice } from "./index-slice";

export function add_inventory_thunk() {
    return async function (dispatch, getState) {
        const data = getState().index.inventoryForm;
        const response = await add_inventory_service(data);
        await dispatch(
            indexSlice.actions.setInventories(response.result)
        );
    };
}

export function get_inventory_thunk() {
    return async function (dispatch, getState) {
        const inventories = getState().index.inventories;
        const response = await get_inventory_service();
        await dispatch(
            indexSlice.actions.setInventories([
                ...inventories,
                ...response.result,
            ])
        );
    };
}
