import Table from "@/app/components/table";
import React, { useEffect, useState } from "react";
import store from "@/app/store/store";
import { get_account_thunk } from "./redux/account-thunk";
import { useSelector } from "react-redux";
import MainLayout from '../layout'
import CreateAccountSection from "./sections/create-account-section";
import EditAccountSection from "./sections/edit-account-section";
import DeleteAccountSection from "./sections/delete-account-section";

export default function AccountPage() {
  const { accounts } = useSelector((state) => state.account);
  const [dataChecked, setDataChecked] = useState([]);
  const columns = [
    {
      title: "ID",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
    }
  ];

  const data = accounts.map((res) => ({
    ...res,
    action: (
        <div className="flex gap-4">
            <EditAccountSection datas={res} />
            <DeleteAccountSection datas={res} />
        </div>
    ),
  }));

  useEffect(() => {
    store.dispatch(get_account_thunk());
  }, []);

  return (
    <MainLayout>
      <CreateAccountSection />
      <Table
        setDataChecked={setDataChecked}
        dataChecked={dataChecked}
        columns={columns}
        data={data}
        isCheckbox={true}
      />
    </MainLayout>
  )
}
