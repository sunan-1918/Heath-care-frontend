import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/NavBar/Navbar";
import React from "react";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default CommonLayout;