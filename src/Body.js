import React from "react";
import "./Body.css";
import BodyGallery from "./Component/BodyGallery";
import Card from "./Component/Card";
import Description from "./Component/Description";
import Filter from "./Component/Filter";
import Services from "./Component/Services";
import TravelDes from "./Component/TravelDes";
function Body() {
  return (
    <div className="body">
      <img className="body__image" src="https://source.unsplash.com/1400x700/?Travel" alt="" />
       <Filter />
       <Card />

      {/* services */}
       <Services />

      {/* Why us ? */}
      <Description />
      <TravelDes />
      <BodyGallery />
      {/* travel to choose city */}

      {/* gallary */}
      
    </div>
  );
}

export default Body;
