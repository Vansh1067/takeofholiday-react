import React from 'react';
import "./BodyGallery.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function BodyGallery() {
    return (
        <div className="bodyGallery">
            <div className="bodyGallery__header">
               <h1>Gallery</h1>
               <div className="bodyGallery__headerRight">
                  <h4 >All gallery</h4>
                  <ArrowForwardIcon color="primary"/>
                </div>     
            </div>
            <div className="bodyGallery__body">

             <div className="bodyGallery__bodyCard">
            <img className="bodyGallery__bodyImage" src="https://source.unsplash.com/300x400/?Bihar" alt=""/>
            <h4>Mumbai</h4>
            </div>

            <div className="bodyGallery__bodyCard" >
            <img className="bodyGallery__bodyImage" src="https://source.unsplash.com/300x400/?Banglore" alt=""/>
            <h4>Chennai</h4>
            </div>

            <div className="bodyGallery__bodyCard">
            <img className="bodyGallery__bodyImage" src="https://source.unsplash.com/300x400/?kerala" alt=""/>
            <h4>Kerala</h4>
            </div>

            <div className="bodyGallery__bodyCard">
            <img className="bodyGallery__bodyImage" src="https://source.unsplash.com/300x400/?punjab" alt=""/>
            <h4>Punjab</h4>
            </div>
            </div>
        </div>
    )
}

export default BodyGallery
