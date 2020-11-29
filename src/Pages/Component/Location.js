import React from 'react'
import "./Location.css"
import Button from '@material-ui/core/Button';


function Location() {
   
    return (
        <div className="location">
           <div className ="location__image">
                <div className ="location__imageData">
                <img className="location__bodyImage" src="https://source.unsplash.com/300x200/?kerala" alt=""/>
                <div className="location__text">
                    <h2>Delhi Tours</h2>
                    <p> this is an mosque tour</p>
                    <p>14 night / 15 days</p>
                    <div className="location__buttom">
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

export default Location
