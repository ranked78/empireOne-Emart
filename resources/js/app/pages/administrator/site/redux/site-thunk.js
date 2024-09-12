import {
    add_site_service,
    delete_site_service,
    get_site_service,
    update_site_service,
} from "@/app/services/site-service";
import { siteSlice } from "./site-slice";

export function add_site_thunk() {
    return async function (dispatch, getState) {
        const data = getState().site.siteForm;
        const response = await add_site_service(data);
        await dispatch(
            siteSlice.actions.setSites(response.result)
        );
    };
}

export function get_site_thunk() {
    return async function (dispatch, getState) {
        const sites = getState().site.sites;
        const response = await get_site_service();
        await dispatch(
            siteSlice.actions.setSites(response.result)
        );
    };
}

export function update_site_thunk() {
    return async function (dispatch, getState) {
        const updateForm = getState().site.updateForm;
        const response = await update_site_service(updateForm);
        await dispatch(
            siteSlice.actions.setSites(response.result)
        );
    };
}

export function delete_site_thunk(id) {
    return async function (dispatch) {
        try {
            const response = await delete_site_service(id);
            dispatch(siteSlice.actions.setSites(response.result));
        } catch (error) {
            console.error("Failed to delete site:", error);
        }
    };
}
