import Sidebar from "@/app/components/sidebar";
import React from "react";
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

export default function AdministratorSidebarSection() {
    const path = window.location.pathname.split("/")[2];
    const navigation = [
        {
            name: "Dashboard",
            href: "/administrator/dashboard",
            icon: HomeIcon,
            current: path == "dashboard",
        },
        {
            name: "Inventory",
            href: "/administrator/inventory",
            icon: UsersIcon,
            current: path == "inventory",
        },
        { name: "Projects", href: "#", icon: FolderIcon, current: false },
        { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
        {
            name: "Documents",
            href: "#",
            icon: DocumentDuplicateIcon,
            current: false,
        },
        { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
    ];
    return (
        <>
            <Sidebar navigation={navigation} />
        </>
    );
}
