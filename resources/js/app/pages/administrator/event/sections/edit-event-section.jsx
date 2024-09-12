import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateForm } from "../redux/event-slice";
import store from "@/app/store/store";
import { update_event_thunk } from "../redux/event-thunk";

export default function EditEventSection({ datas }) {
    const [open, setOpen] = useState(false);
    const { updateForm } = useSelector((state) => state.event);
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
        store.dispatch(update_event_thunk());
        setOpen(false);
    }
    return (
        <div>
            <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => setOpen(!open)}
            >
                Edit
            </button>
            <Modal width="max-w-3xl" open={open} setOpen={setOpen}>
                <h2 className="text-lg font-bold mb-4">Edit Event</h2>
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
                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setUpdateForm({
                                        ...updateForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Site ID"
                            value={updateForm?.site_id ?? ""}
                            name="site_id"
                        />
                    </div>

                    <div className="flex w-full gap-5">
                        <Input
                            type="date"
                            onChange={(e) =>
                                dispatch(
                                    setUpdateForm({
                                        ...updateForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Event Date"
                            value={updateForm?.event_date ?? ""}
                            name="event_date"
                        />

                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setUpdateForm({
                                        ...updateForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Points"
                            value={updateForm?.points ?? ""}
                            name="points"
                        />
                    </div>

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
                            label="Description"
                            value={updateForm?.description ?? ""}
                            name="description"
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
