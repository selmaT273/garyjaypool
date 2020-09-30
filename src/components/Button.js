import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <Link to='Contact'>
            <button className='btn'>Contact</button>
        </Link>
    );
}