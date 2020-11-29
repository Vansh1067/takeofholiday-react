import { Button } from '@material-ui/core'
import React from 'react'
import "./TravelDes.css"
function TravelDes() {
    return (
        <div className="travelDes">
            <div className="travelDes__image">
             <img className="travelDes__ImageData" src="https://source.unsplash.com/400x500/?Mumbai" alt=""/>
             </div>
            <div className="travelDes__header">
            <h1>Having trouble choosing a city ?</h1>
            <p>
            Travel is the movement of people between distant geographical locations. 
            Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, 
            ship or other means, with or without luggage, and can be one way or round trip.
            Travel is the movement of people between distant geographical locations. 
            
            <br /><br/>
            Travel is the movement of people between distant geographical locations. 
            Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, 
            ship or other means, with or without luggage, and can be one way or round trip.
            </p>   
            <Button variant="contained" color="primary">Wiew all destinations</Button>         
         </div>
        </div>
    )
}

export default TravelDes
