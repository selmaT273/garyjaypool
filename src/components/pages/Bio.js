import React from 'react'
import './Bio.css';

export default function Bio() {
    return (
        <>
            <div className="bio-banner-container">
                <h1 className="bio-banner-title">Gary Jay Pool</h1>
                <img className="bio-pic" alt="explosives" src={require('../../standinbiopic.jpg')} /> 
            </div>
        </>
    )
}