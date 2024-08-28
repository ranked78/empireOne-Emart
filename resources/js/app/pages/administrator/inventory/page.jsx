import Table from "@/app/components/table";
import React, { useEffect, useState } from "react";
import CreateInventorySection from "./sections/create-inventory-section";
import store from "@/app/store/store";
import { get_inventory_thunk } from "./redux/inventory-thunk";
import { useSelector } from "react-redux";
import EditTnventorySection from "./sections/edit-inventory-section";
import MainLayout from "../layout";

import DeleteInventorySection from "./sections/delete-inventory-section";

export default function InventoryPage({ auth }) {
    const { inventories } = useSelector((state) => state.inventory);
    const [dataChecked, setDataChecked] = useState([]);
    const columns = [
        {
            title: "Equipment Type",
            key: "equipment_type",
        },
        {
            title: "Assigned",
            key: "assigned",
        },
        {
            title: "Brand",
            key: "brand",
        },
        {
            title: "Model",
            key: "model",
        },
        {
            title: "Serial",
            key: "serial",
        },
        {
            title: "Account",
            key: "account",
        },
        {
            title: "Site",
            key: "site",
        },
        {
            title: "Status",
            key: "status",
        },
        {
            title: "Cost",
            key: "cost",
        },
        {
            title: "Date Received",
            key: "date_received",
        },
        {
            title: "Action",
            key: "action",
        },
    ];
    const data = inventories.map((res) => ({
        ...res,
        action: (
            <div className="flex gap-4">
                <EditTnventorySection datas={res} />
                <DeleteInventorySection datas={res} />
            </div>
        ),
    }));

    useEffect(() => {
        store.dispatch(get_inventory_thunk());
    }, []);
    return (
        <MainLayout>
            <CreateInventorySection />
            <Table
                setDataChecked={setDataChecked}
                dataChecked={dataChecked}
                columns={columns}
                data={data}
                isCheckbox={true}
            />
        </MainLayout>
    );
}
