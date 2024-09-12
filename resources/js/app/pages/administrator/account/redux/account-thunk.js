import {
    add_account_service,
    delete_account_service,
    get_account_service,
    update_account_service,
} from "@/app/services/account-service";
import { accountSlice } from "./account-slice";

export function add_account_thunk() {
    return async function (dispatch, getState) {
        const data = getState().account.accountForm;
        const response = await add_account_service(data);
        await dispatch(
            accountSlice.actions.setAccounts(response.result)
        );
    };
}

export function get_account_thunk() {
    return async function (dispatch, getState) {
        const accounts = getState().account.accounts;
        const response = await get_account_service();
        await dispatch(
            accountSlice.actions.setAccounts(response.result)
        );
    };
}

export function update_account_thunk() {
    return async function (dispatch, getState) {
        const updateForm = getState().account.updateForm;
        const response = await update_account_service(updateForm);
        await dispatch(
            accountSlice.actions.setAccounts(response.result)
        );
    };
}

export function delete_account_thunk(id) {
    return async function (dispatch) {
        try {
            const response = await delete_account_service(id);
            dispatch(accountSlice.actions.setAccounts(response.result));
        } catch (error) {
            console.error("Failed to delete account:", error);
        }
    };
}
