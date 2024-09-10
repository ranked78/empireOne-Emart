import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateForm } from "../redux/user-slice";
import store from "@/app/store/store";
import { update_user_thunk } from "../redux/user-thunk";

export default function EditUserSection({ datas }) {
    const [open, setOpen] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
    const [passwordError, setPasswordError] = useState(""); // State for password error
    const { updateForm } = useSelector((state) => state.users);
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
        if (updateForm.password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        setPasswordError(""); // Clear any previous errors
        store.dispatch(update_user_thunk());
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
                <h2 className="text-lg font-bold mb-4">Edit User</h2>
                <form
                    onSubmit={submit_event}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="flex w-full gap-5">
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
                            label="Employee ID"
                            value={updateForm?.emp_id ?? ""}
                            name="emp_id"
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
                            label="Position ID"
                            value={updateForm?.position_id ?? ""}
                            name="position_id"
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
                            type="email"
                            onChange={(e) =>
                                dispatch(
                                    setUpdateForm({
                                        ...updateForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Email"
                            value={updateForm?.email ?? ""}
                            name="email"
                        />
                    </div>

                    <div className="flex w-full gap-5">
                        <Input
                            type="password"
                            onChange={(e) =>
                                dispatch(
                                    setUpdateForm({
                                        ...updateForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Password"
                            value={updateForm?.password ?? ""}
                            name="password"
                        />
                        <Input
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
                            label="Confirm Password"
                            value={confirmPassword}
                            name="confirm_password"
                        />
                    </div>

                    {/* Display password mismatch error */}
                    {passwordError && (
                        <p className="text-red-500 text-sm">{passwordError}</p>
                    )}

                    <div className="flex w-full gap-5">
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
                            label="Position"
                            value={updateForm?.position ?? ""}
                            name="position"
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
                            label="Phone"
                            value={updateForm?.phone ?? ""}
                            name="phone"
                        />
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
                            label="Status"
                            value={updateForm?.status ?? ""}
                            name="status"
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
