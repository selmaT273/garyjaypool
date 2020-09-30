import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Gary Jay Pool
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
                    <li className='nav-item'>
                        <Link 
                            to= '/bio' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Bio
                        </Link>
                    </li> 
                    <li className='nav-item'>
                        <Link 
                            to= '/works' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Works
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to= '/shop' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to= '/links' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Links<i className='fas fa-caret-down' />
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