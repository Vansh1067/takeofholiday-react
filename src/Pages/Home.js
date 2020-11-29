import { Button } from '@material-ui/core'
import React from 'react'
import BodyGallery from './Component/BodyGallery'
import Filter from './Component/Filter'
import HomeDescription from './Component/HomeDescription'
import Location from './Component/Location'
import Services from './Component/Services'
import TravelDes from './Component/TravelDes'
import "./Home.css"

function Home() {
    return (
        <div className="home ">
            <div className="home__Image backgroundImage  ">
            </div>     
            <div class="home__Filter">
                      <Filter />
                      <Button color="primary" >Search</Button>
            </div>
            <div className="home__location">
                <div className="home__locationHeader">
                <h3>New Tours</h3>
                </div>
                <div className="home__locationCard">
                <Location className="home__locationCardData" />
                <Location className="home__locationCardData" />
                <Location className="home__locationCardData"/>
                <Location className="home__locationCardData"/>
               
                </div> 
            </div>
            <div className="home__Services">
                <Services />        
            </div>
            <div className="home__Description">
                <HomeDescription />

            </div>

            <div className="home__TravelDes">
                <TravelDes />
            </div>
            <div className="home__BodyGallery">
                <BodyGallery />

            </div>

        </div>
    )
}

export default Home
