import React from 'react';
import { Link, withRouter } from "react-router-dom";

import NavLinks from './NavLinks';

const Navbar = ({ history }) => {
    return (
        <div className="nav navbar">
            <div className="nav__brand-image">
            </div>
            <NavLinks {...history} />
        </div >
    )
}


export default withRouter(Navbar);
