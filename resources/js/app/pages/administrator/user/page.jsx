import Table from "@/app/components/table";
import React, { useEffect, useState } from "react";
import store from "@/app/store/store";
import { get_user_thunk } from "./redux/user-thunk"
import { useSelector } from "react-redux";
import MainLayout from "../layout";
import CreateUserSection from "./sections/create-user-section";
import EditUserSection from "./sections/edit-user-section";
import DeleteUserSection from "./sections/delete-user-section";


export default function UserPage() {
    const { users } = useSelector((state) => state.user);
    const [dataChecked, setDataChecked] = useState([]);
    const columns = [
        {
            title: "Employee ID",
            key: "emp_id",
        },
        {
            title: "Position ID",
            key: "position_id",
        },
        {
            title: "Site ID",
            key: "site_id",
        },
        {
            title: "Name",
            key: "name",
        },
        {
            title: "Email",
            key: "email",
        },
        {
            title: "Points",
            key: "points",
        },
        {
            title: "Position",
            key: "position",
        },
        {
            title: "Phone",
            key: "phone",
        },
        {
            title: "Status",
            key: "status",
        },
        {
            title: "Action",
            key: "action",
        },
    ];


    const data = users.map((res) => ({
        ...res,
        action: (
            <div className="flex gap-4">
                <EditUserSection datas={res} />
                <DeleteUserSection datas={res} />
            </div>
        ),
    }));

    useEffect(() => {
        store.dispatch(get_user_thunk());
    }, []);

    return (

        <MainLayout>
            <CreateUserSection/>
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
