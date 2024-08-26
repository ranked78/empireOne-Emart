import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "@/app/components/modal";
import { delete_inventory_thunk } from "../redux/inventory-thunk";


export default function DeleteInventorySection({ datas }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(delete_inventory_thunk(datas.id));  // Pass the ID of the inventory item
        setOpen(false);
    };

    return (
        <div>
            <button
                className="text-red-600 hover:text-red-500"
                onClick={() => setOpen(!open)}
            >
                Delete
            </button>
            <Modal width="max-w-xl" open={open} setOpen={setOpen}>
                <div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                            className="text-base font-semibold leading-6 text-gray-900"
                            id="modal-title"
                        >
                            Delete Inventory
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Are you sure you want to delete the {datas.model ?? 'inventory'}?
                                All of your data will be permanently removed.
                                This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={handleDelete}  // Call handleDelete on click
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => setOpen(false)}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}
