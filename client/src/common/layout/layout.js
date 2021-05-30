import React from "react";
import Header from "../header";
import Footer from "../footer";
import MobileNav from "../mobile-nav";

const Layout = ({children, render = () => (null)}) => {
    return (
        <>
            <Header />
            <MobileNav />
            {render}
            <main>
                {children} 
            </main>
            <Footer />
        </>
    );
};

export default Layout;
