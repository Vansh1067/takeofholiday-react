import React from "react";
import "./Body.css";
import Description from "./Component/Description";
import Filter from "./Component/Filter";
import Services from "./Component/Services";
function Body() {
  return (
    <div className="body">
      <img className="body__image" src="https://source.unsplash.com/1400x700/?Travel" alt="" />
       <Filter />

      {/* services */}
       <Services />

      {/* Why us ? */}
      <Description />

      {/* travel to choose city */}

      {/* gallary */}
      <h1 float="left">Gallery</h1>
    <div className="body__gallary">
      
        <div class="body__gallaryFirst">
          <img src="https://source.unsplash.com/430x230/?Mumbai" alt="" />
          <h2>Mumbai</h2>
        </div>
      

      <div class="body__gallarySecound">
        <img src="https://source.unsplash.com/430x230/?Chennai" alt="" />
        <h2>Chennai</h2>
      </div>

      <div class="body__gallaryThree">
        <img src="https://source.unsplash.com/430x230/?Kolkata" alt="" />
        <h2>Kolkata</h2>
      </div>
      </div>
    </div>
  );
}

export default Body;
