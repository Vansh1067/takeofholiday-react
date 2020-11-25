import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      
        <div className="footer__main">
          <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" />
          <div>
          <p>
          <img src="https://img.icons8.com/fluent/35/000000/twitter.png"/>

          <img src="https://img.icons8.com/fluent/35/000000/facebook-new.png"/>
          
          <img src="https://img.icons8.com/fluent/35/000000/whatsapp.png"/>


          </p>
          </div >
          <div className="footer__mainText">
          <p>All rights reserved by CopyRight 2020 </p>
        </div>
        </div>

        <div className="footer__first">
        <ul >
          <li>
               <h2 className="footer__information">Information</h2>
            <ul className="footer__firstList">
              <li>
                About-Us
              </li>
              <li>
                Services
              </li>
              <li>
                Terms & Conditions
              </li>
              <li>
                Contact Us
              </li>
            </ul>
          </li>
          </ul>
         </div>

         <div className="footer__second">
           <ul>
             <li >
            <h2 className="footer__tours">Tours</h2>
            <ul className="footer__secondList">
              <li>
                Foriegn Tours
              </li>
              <li>
                Azerbazian Tours
              </li>
              <li>
                New Tours
              </li>
              <li>
                Popular Tours
              </li>
            </ul>
          </li>
          </ul>
          </div>

          <div className="footer__third">
            <ul>
          <li class="features">
            <h2 className="footer__contact">Contact</h2>
            <ul className="footer__thirdList">
              <li>
                Address Line 1
              </li>
              <li>
                Address Line 2
              </li>
              <li>
                Phone
              </li>
              <li>
                Email
              </li>
            </ul>
          </li>
          </ul>
         </div>
          
    </div>
  );
}

export default Footer;
