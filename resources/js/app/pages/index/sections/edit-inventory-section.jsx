import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import Select from "@/app/components/select";
import React, { useEffect, useState } from "react";

export default function EditTnventorySection({datas}) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    useEffect(()=>{
        setData(datas)
    },[])
    function submit_event(params) {
        
    }
    return (
        <div>
            <button className="text-blue-600" onClick={() => setOpen(!open)}>
                Edit
            </button>
            <Modal width="max-w-3xl" open={open} setOpen={setOpen}>
                <h2 className="text-lg font-bold mb-4">Edit Inventory</h2>
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
                            value={data?.equipment_type ?? ""}
                            name="equipment_type"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    equipment_type: e.target.value,
                                })
                            }
                            label="Equipment Type"
                        />

                        <Select
                            options={[
                                { value: "", label: "" },
                                { value: "San Carlos", label: "San Carlos" },
                                { value: "Carcar", label: "Carcar" },
                            ]}
                            value={data?.site ?? ""}
                            name="site"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    site: e.target.value,
                                })
                            }
                            label="Site"
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Assigned"
                            value={data?.assigned ?? ""}
                            name="assigned"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Brand"
                            value={data?.brand ?? ""}
                            name="brand"
                        />

                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Model"
                            value={data?.model ?? ""}
                            name="model"
                        />
                    </div>

                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Serial"
                            value={data?.serial ?? ""}
                            name="serial"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Account"
                            value={data?.account ?? ""}
                            name="account"
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Status"
                            value={data?.status ?? ""}
                            name="status"
                        />
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Account"
                            value={data?.acount ?? ""}
                            name="acount"
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <Input
                            type="number"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Cost"
                            value={data?.cost ?? ""}
                            name="cost"
                        />
                        <Input
                            type="date"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            label="Date Received"
                            value={data?.date_received ?? ""}
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
                            data-autofocus
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
