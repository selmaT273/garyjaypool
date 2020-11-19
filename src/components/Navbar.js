import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import AboutDropdown from './AboutDropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnterAbout = () => {
        if(window.innerWidth < 900) {
            setAboutDropdown(false);
        }
        else {
            setAboutDropdown(true);
        }
    };

    const onMouseLeaveAbout = () => {
        if (window.innerWidth < 900){
         //   setDropdown(false);
            setAboutDropdown(false);
        }
        else {
          //  setDropdown(false);
            setAboutDropdown(false);
        }
    };
    const onMouseEnter = () => {
        if(window.innerWidth < 900) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 900){
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <div>Gary Jay Pool</div> 
                    <span>Author | Vietnam Veteran | Storyteller</span>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link 
                            to= '/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' 
                        onMouseEnter={onMouseEnterAbout}
                        onMouseLeave={onMouseLeaveAbout}
                    >
                        <Link 
                            // to= '/links' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            About <i className='fas fa-caret-down' />
                        </Link>
                        {aboutDropdown && <AboutDropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to= '/shop' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item' 
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link 
                            // to= '/links' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Links <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to= '/contact' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                   
                </ul>
            </nav>
        </>
    );
}

export default Navbar;