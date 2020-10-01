import React from 'react'
import './Home.css';
export default function Home() {
    return (
        <>
            <main>
                <div className="home-container">
                    <div className="home-pic-container">
                        <img className="home-pic" alt="explosives" src={require('../../home-image.jpg')} />
                        <div className="home-pic-text">
                            <p>"I was out with a patrol in Viet Nam's rice paddy covered delta when it occurred to me...my father had spent his life trying to raise me to survive being a soldier in a war that he somehow knew was coming."</p>
                        </div>
                    </div>
                </div>
            
            
            
            
            
            </main>

        </>
    )
}