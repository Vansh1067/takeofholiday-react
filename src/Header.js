import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {

    return (
        <div className='header' >
         <header>
         <img src="https://img.icons8.com/ios-glyphs/30/000000/beach-umbrella.png" alt=""/>
                <ul class="nav__links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/tours"><li>Tours</li></Link>
                    <Link to="/destinations"><li>Destinations</li></Link>
                    <Link to="/about-us"><li>About-Us</li></Link>
                    <Link to="/gallery"><li>Gallery</li></Link>
                </ul>
        </header>         
        </div>
        

    )
}

export default Header 
