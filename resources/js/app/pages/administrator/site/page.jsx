import Table from "@/app/components/table";
import React, { useEffect, useState } from "react";
import store from "@/app/store/store";
import { get_site_thunk } from "./redux/site-thunk";
import { useSelector } from "react-redux";
import MainLayout from '../layout'
import CreateSiteSection from "./sections/create-site-section";
import EditSiteSection from "./sections/edit-site-section";
import DeleteSiteSection from "./sections/delete-site-section";

export default function SitePage() {
  const { sites } = useSelector((state) => state.site);
  const [dataChecked, setDataChecked] = useState([]);
  const columns = [
    {
      title: "ID",
      key: "id",
    },
    {
      title: "Name",
      key: "site_name",
    },
    {
      title: "Action",
      key: "action",
    }
  ];

  const data = sites.map((res) => ({
    ...res,
    action: (
        <div className="flex gap-4">
            <EditSiteSection datas={res} />
            <DeleteSiteSection datas={res} />
        </div>
    ),
  }));

  useEffect(() => {
    store.dispatch(get_site_thunk());
  }, []);

  return (
    <MainLayout>
      <CreateSiteSection />
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
