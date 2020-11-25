import { Button } from '@material-ui/core';
import React from 'react';
import "./CardDetails.css"

function CardDetails() {
    return (
        <div className="cardDetails">
            <div className ="cardDetails__image">
                <div className ="cardDetails__imageData">
                <img className="cardDetails__bodyImage" src="https://source.unsplash.com/300x200/?kerala" alt=""/>
                <div className="cardDetails__text">
                    <h2>Delhi Tours</h2>
                    <p> this is an mosque tour</p>
                    <p>14 night / 15 days</p>
                    <div className="cardDetails__buttom">
                        <h3>LOGO</h3>
                        <h4>Star</h4>
                        <Button variant="contained" color="primary">Details</Button>         
                    </div>
                </div>
                </div>         
            </div> 
            </div>
            
        
    )
}

export default CardDetails
