import React from "react";

import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="layout">
        <Navbar />

        <div className="container container--main">
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;
