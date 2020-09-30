import React, { useState } from 'react';
import { AboutItems } from './AboutItems';
import { Link } from 'react-router-dom';
import './AboutDropdown.css';


function AboutDropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <ul onClick={handleClick}
        className={click ? 'about-dropdown-menu clicked' : 'about-dropdown-menu'}>
            {AboutItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default AboutDropdown;