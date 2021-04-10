import React from 'react';
import "./Header.css";
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="header__icon">
                <Link to="/">
                <GroupWorkIcon fontSize="large" />
                </Link>
            </div>
            <div className="header__title">
                <h1>JUNTOS</h1>
            </div>
            <div className="header__right">
                <div className="header__about">
                <Link to="/about">
                    <p>About Us</p>
                </Link>
                </div>
                <div className="header__contact">
                <Link to="/contact">
                    <p>Contact Us</p>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
