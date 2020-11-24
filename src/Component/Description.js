import React from 'react';
import "./Description.css"

function Description() {
    return (
        <div className="description">
        <div className="description__header">
            <h1>Why us?</h1>
            <p>
            Travel is the movement of people between distant geographical locations. 
            Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, 
            ship or other means, with or without luggage, and can be one way or round trip.
            <br />
            Travel is the movement of people between distant geographical locations. 
            Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, 
            ship or other means, with or without luggage, and can be one way or round trip.
            </p>            
         </div>
         <div className="description__image">
             <img className="description__Image" src="https://source.unsplash.com/400x500/?Delhi" alt=""/>
         </div>
        </div>
    )
}

export default Description
