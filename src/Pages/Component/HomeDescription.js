import { Button, Card, CardActionArea, CardMedia } from '@material-ui/core'
import "./HomeDescription.css"
import React from 'react'

function HomeDescription() {
    return (
        <div className="homeDescription">
         <div className="homeDescription__header">
            <h1>Why us?</h1>
            <p>
            Travel is the movement of people between distant geographical locations. 
            Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, 
            ship or other means, with or without luggage, and can be one way or round trip.
            Travel is the movement of people between distant geographical locations. 
            
            <br /><br/>
            Travel is the movement of people between distant geographical locations. 
            Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, 
            ship or other means, with or without luggage, and can be one way or round trip.
            Travel is the movement of people between distant geographical locations. 
           
            </p>   
            <Button variant="contained" color="primary">Deatils</Button>         
         </div>
         <div className="homeDescription__image">
         <Card >   
                  <CardActionArea > 
                    <CardMedia style={{width:300}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="https://source.unsplash.com/400x500/?Travel"
                    />
                   </CardActionArea>
                </Card>
         </div>
            
        </div>
    )
}

export default HomeDescription
