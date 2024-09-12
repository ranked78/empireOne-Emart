import Sidebar from "@/app/components/sidebar";
import React from "react";
import {
    HomeIcon,
    UsersIcon,
    CalendarDaysIcon,
    GiftIcon,
    GiftTopIcon,
    UserIcon,
    PresentationChartLineIcon,
    GlobeAsiaAustraliaIcon,
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
        {
            name: "Users",
            href: "/administrator/user",
            icon: UsersIcon,
            current: false
        },
        { name: "Reward", href: "#", icon: GiftIcon, current: false },
        { name: "Reward Claimed", href: "#", icon: GiftTopIcon, current: false },
        {
            name: "Accounts",
            href: "/administrator/account",
            icon: UserIcon,
            current: false
        },
        { name: "Engagement Activities", href: "#", icon: PresentationChartLineIcon, current: false },
        {
            name: "Event Activities",
            href: "/administrator/event",
            icon: CalendarDaysIcon,
            current: path == "events",
        },
        {
            name: "Site",
            href: "#",
            icon: GlobeAsiaAustraliaIcon,
            current: false,
        }
    ];
    return (
        <>
            <Sidebar navigation={navigation} />
        </>
    );
}
