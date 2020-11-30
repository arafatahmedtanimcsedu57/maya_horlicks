import React from 'react';
import { Link, withRouter } from "react-router-dom";

import NavLinks from './NavLinks';

import brand_logo_1 from './images/brand_logo_1.png';
import brand_logo_2 from './images/brand_logo_2.png';

const Navbar = ({ history }) => {
    return (
        <div className="nav navbar">
            <div className="nav__brand-image">
                <img src={brand_logo_2} alt="brand logo" />
                <img src={brand_logo_1} alt="brand logo" />
            </div>
            <NavLinks {...history} />
        </div >
    )
}


export default withRouter(Navbar);
