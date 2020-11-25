import React from 'react'
import "./Card.css"
import CardDetails from './CardDetails'

function Card() {
    return (
        <div className="card">
           <div className="card__header">
              <h1>New Tours</h1>
              <div className="card__deatils">
                  <CardDetails />
                  <CardDetails />
                  <CardDetails />
                  <CardDetails />
              </div>
          
           </div>  
        </div>
    )
}

export default Card
