import { Button, Grid } from '@material-ui/core'
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
                      
            </div>
            <div className="home__location">
               <Grid Container >
                <div className="home__locationHeader">
               

                <h3>New Tours</h3>
                </div>
                <div className="home__locationCard">
                <Grid item >
                <Location className="home__locationCardData" />
                </Grid>
                <Grid item>
                <Location className="home__locationCardData" />
                </Grid>
                <Grid item>
                <Location className="home__locationCardData"/>
                </Grid>
                <Grid item>
                <Location className="home__locationCardData"/>
                </Grid>
                </div> 
                </Grid>
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
