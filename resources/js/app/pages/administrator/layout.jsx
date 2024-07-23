import Notification from "@/app/components/notification";
import AdministratorSidebarSection from "./_sections/administrator-sidebar-section";
import AdministratorTopbarSection from "./_sections/administrator-topbar-section";
import { useState } from "react";
import AdministratorProgressBarSection from "./_sections/administrator-progress-bar-section";

export default function MainLayout({ children }) {
    const [show, setShow] = useState(true);
    return (
        <>
            <Notification
                show={show}
                setShow={setShow}
                type="success"
                title="Successfully Save"
                subTitle="Anyone with a link can now view this file."
            />
            <AdministratorSidebarSection />
            <div className="lg:pl-72">
                <AdministratorTopbarSection />
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <AdministratorProgressBarSection />
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
