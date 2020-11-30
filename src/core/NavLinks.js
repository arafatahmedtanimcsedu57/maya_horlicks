import React from 'react'
import { Link, withRouter } from "react-router-dom";

import { getNavLinkList, isActive } from '../helpers/_navlink';

const navlink_list = getNavLinkList();

const NavLinks = ({ location }) => {
    return (
        <ul className="nav__links">{
            navlink_list.map((navlink, index) =>
                <li className="nav-item" key={`${index}-${navlink.name}`} >
                    <Link
                        className={`nav-link ${isActive({ ...location }, navlink.to)}`}
                        to={navlink.to}
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