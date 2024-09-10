import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import Select from "@/app/components/select";
import store from "@/app/store/store";
import React, { useState } from "react";
import { add_inventory_thunk } from "../redux/inventory-thunk";
import { useDispatch, useSelector } from "react-redux";
import { setInventoryForm } from "../redux/inventory-slice";

export default function CreateInventorySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { inventoryForm } = useSelector((state) => state.inventory);

    function submit_event(e) {
        e.preventDefault();
        store.dispatch(add_inventory_thunk(inventoryForm));
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
                Add Inventory
            </Button>
            <Modal
                width="max-w-3xl"
                open={isModalOpen}
                setOpen={setIsModalOpen}
            >
                <h2 className="text-lg font-bold mb-4">Add Inventory</h2>
                <form
                    onSubmit={submit_event}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="flex w-full gap-5">
                        <Select
                            options={[
                                { value: "", label: "" },
                                { value: "Computer", label: "Computer" },
                                { value: "Laptop", label: "Laptop" },
                                { value: "Mouse", label: "Mouse" },
                                { value: "Keyboard", label: "Keyboard" },
                            ]}
                            value={inventoryForm?.equipment_type ?? ""}
                            name="equipment_type"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        equipment_type: e.target.value,
                                    })
                                )
                            }
                            label="Equipment Type"
                        />

                        <Select
                            options={[
                                { value: "", label: "" },
                                { value: "San Carlos", label: "San Carlos" },
                                { value: "Carcar", label: "Carcar" },
                            ]}
                            value={inventoryForm?.site ?? ""}
                            name="site"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        site: e.target.value,
                                    })
                                )
                            }
                            label="Site"
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Assigned"
                            value={inventoryForm?.assigned ?? ""}
                            name="assigned"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Brand"
                            value={inventoryForm?.brand ?? ""}
                            name="brand"
                        />

                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Model"
                            value={inventoryForm?.model ?? ""}
                            name="model"
                        />
                    </div>

                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Serial"
                            value={inventoryForm?.serial ?? ""}
                            name="serial"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Account"
                            value={inventoryForm?.account ?? ""}
                            name="account"
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Status"
                            value={inventoryForm?.status ?? ""}
                            name="status"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Account"
                            value={inventoryForm?.acount ?? ""}
                            name="acount"
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <Input
                            type="number"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Cost"
                            value={inventoryForm?.cost ?? ""}
                            name="cost"
                        />
                        <Input
                            type="date"
                            onChange={(e) =>
                                dispatch(
                                    setInventoryForm({
                                        ...inventoryForm,
                                        [e.target.name]: e.target.value,
                                    })
                                )
                            }
                            label="Date Received"
                            value={inventoryForm?.date_received ?? ""}
                            name="date_received"
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
