import React, { useEffect } from "react";
import TopNavbarSection from "./administrator/_sections/top-navbar-section";
import store from "../store/store";
import { get_user_thunk } from "../redux/app-thunk";

export default function MainLayout({ children }) {

    useEffect(()=>{
        store.dispatch(get_user_thunk())
    },[])
    return (
        <div>
            <TopNavbarSection />
            {children}
        </div>
    );
}
