import React from "react";
import TopNavbarSection from "./_sections/top-navbar-section";

export default function MainLayout({ children }) {
    return (
        <div>
            <TopNavbarSection />
            <div className="mt-20">{children}</div>
        </div>
    );
}
