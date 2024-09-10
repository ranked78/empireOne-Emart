import Table from "@/app/components/table";
import React, { useEffect, useState } from "react";
import store from "@/app/store/store";
import { get_user_thunk } from "./redux/user-thunk"
import { useSelector } from "react-redux";
import MainLayout from "../layout";


export default function UserPage() {
    const { events } = useSelector((state) => state.event);
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


    const data = events.map((res) => ({
        ...res,
        // action: (
        //     <div className="flex gap-4">
        //         <EditTnventorySection datas={res} />
        //         <DeleteInventorySection datas={res} />
        //     </div>
        // ),
    }));

    return (

        <MainLayout>
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
