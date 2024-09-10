import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import React, { useState } from "react";
import store from "@/app/store/store";
import { add_user_thunk } from "../redux/user-thunk";
import { useDispatch, useSelector } from "react-redux";
import { setUserForm } from "../redux/user-slice";

export default function CreateUserSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { userForm } = useSelector((state) => state.users);

    function submit_event(e) {
        e.preventDefault();
        store.dispatch(add_user_thunk(userForm));
        setIsModalOpen(false);
    }

    return (
        <div>
            <Button
                type="button"
                loading={false}
                className="my-3"
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                Add User
            </Button>
            <Modal
                width="max-w-3xl"
                open={isModalOpen}
                setOpen={setIsModalOpen}
            >
                <h2 className="text-lg font-bold mb-4">Add User</h2>
                <form
                    onSubmit={submit_event}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="flex w-full gap-5">
                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Employee ID"
                            value={userForm?.emp_id ?? ""}
                            name="emp_id"
                        />
                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Position ID"
                            value={userForm?.position_id ?? ""}
                            name="position_id"
                        />
                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Site ID"
                            value={userForm?.site_id ?? ""}
                            name="site_id"
                        />
                    </div>

                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Name"
                            value={userForm?.name ?? ""}
                            name="name"
                        />
                        <Input
                            type="email"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Email"
                            value={userForm?.email ?? ""}
                            name="email"
                        />
                    </div>
                    
                    <div className="flex w-full gap-5">
                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Points"
                            value={userForm?.points ?? ""}
                            name="points"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Position"
                            value={userForm?.position ?? ""}
                            name="position"
                        />
                    </div>

                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Phone"
                            value={userForm?.phone ?? ""}
                            name="phone"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setUserForm({
                                        ...userForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Status"
                            value={userForm?.status ?? ""}
                            name="status"
                        />
                    </div>

                    <div className="bg-gray-50 sm:flex sm:flex-row-reverse ">
                        <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
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
