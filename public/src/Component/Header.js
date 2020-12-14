import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    return (
        <div className="header">
            <div className="header__Logo">
                <h2>Logo</h2>
            </div>
            <div className="header__Links header__LinksNone">
                   <ul>
                   <Link className="header__LinksItems" to="/" >
                    <li >
                        Home
                    </li>
                    </Link>
                    <Link className="header__LinksItems" to="/tours" >
                    <li>
                        Tours
                    </li>
                    </Link>
                    <Link className="header__LinksItems" to="/destinations" >
                    <li>
                        Destinations
                    </li>
                    </Link>
                    <Link className="header__LinksItems" to="/services" >
                    <li>
                        Services
                    </li>
                    </Link>
                    <Link className="header__LinksItems" to="/about">
                    <li>
                        About Us
                    </li>
                    </Link>
                    <Link className="header__LinksItems" to="/gallery" >
                    <li>
                        Gallery
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="header__Burger">
                <MenuIcon />       
            </div>
        </div>
    )
}

export default Header
