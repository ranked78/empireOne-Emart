import Sidebar from "@/app/components/sidebar";
import React from "react";
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    CalendarDaysIcon,
    GiftIcon,
    ChatBubbleLeftRightIcon,
    NewspaperIcon
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
        { name: "Account Rewards", href: "#", icon: GiftIcon, current: false },
        { name: "Engagement Activities", href: "#", icon: ChatBubbleLeftRightIcon, current: false },
        { name: "News Feed", href: "#", icon: NewspaperIcon, current: false },
        { name: "Projects", href: "#", icon: FolderIcon, current: false },
        { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
        {
            name: "Documents",
            href: "#",
            icon: DocumentDuplicateIcon,
            current: false,
        },
        { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
        {
            name: "Events",
            href: "/administrator/events",
            icon: CalendarDaysIcon,
            current: path == "events",
        }
    ];
    return (
        <>
            <Sidebar navigation={navigation} />
        </>
    );
}
