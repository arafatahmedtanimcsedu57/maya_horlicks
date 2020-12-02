import React from 'react'
// import { Link, withRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import { getNavLinkList, isActive } from '../helpers/_navlink';

const navlink_list = getNavLinkList();

const NavLinks = ({ location }) => {
    return (
        <ul className="nav__links">{
            navlink_list.map((navlink, index) =>
                <li
                    // className={`nav-item nav-item${isActive({ ...location }, navlink.to)}`}
                    className="nav-item"
                    key={`${index}-${navlink.name}`}
                >
                    <Link
                        // className={`nav-link nav-link${isActive({ ...location }, navlink.to)}`}
                        className="nav-link"
                        activeClass="nav-link--active"
                        type="submit"
                        value={navlink.to}
                        to={navlink.to}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={200}
                    >
                        {navlink.tag_name}
                    </Link>
                </li>
            )
        }
        </ul >
    )
}

export default NavLinks;