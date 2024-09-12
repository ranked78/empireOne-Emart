import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateForm } from "../redux/account-slice";
import store from "@/app/store/store";
import { update_account_thunk } from "../redux/account-thunk";

export default function EditAccountSection({ datas }) {
    const [open, setOpen] = useState(false);
    const { updateForm } = useSelector((state) => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        if (open) {
            dispatch(setUpdateForm(datas));
        } else {
            dispatch(setUpdateForm({}));
        }
    }, [open]);
    function submit_event(e) {
        e.preventDefault();
        store.dispatch(update_account_thunk());
        setOpen(false);
    }
    return (
        <div>
            <button
                className="text-blue-600 hover:text-blue-500"
                onClick={() => setOpen(!open)}
            >
                Edit
            </button>
            <Modal width="max-w-3xl" open={open} setOpen={setOpen}>
                <h2 className="text-lg font-bold mb-4">Edit Account</h2>
                <form
                    onSubmit={submit_event}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setUpdateForm({
                                        ...updateForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Name"
                            value={updateForm?.name ?? ""}
                            name="name"
                        />
                    </div>


                    <div className="bg-gray-50 sm:flex sm:flex-row-reverse ">
                        <button
                            type="Submit"
                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
