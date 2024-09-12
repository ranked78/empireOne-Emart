import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import store from "@/app/store/store";
import React, { useState } from "react";
import { add_account_thunk } from "../redux/account-thunk";
import { useDispatch, useSelector } from "react-redux";
import { setAccountForm } from "../redux/account-slice";

export default function CreateAccountSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { accountForm } = useSelector((state) => state.account);

    function submit_event(e) {
        e.preventDefault();
        store.dispatch(add_account_thunk(accountForm));
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
                Add Account
            </Button>
            <Modal
                width="max-w-3xl"
                open={isModalOpen}
                setOpen={setIsModalOpen}
            >
                <h2 className="text-lg font-bold mb-4">Add Account</h2>
                <form
                    onSubmit={submit_event}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setAccountForm({
                                        ...accountForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Name"
                            value={accountForm?.name ?? ""}
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
                            inventoryForm-autofocus
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
