import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__main">
        <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt=" logo" />

        <div className="footer__SocialLogo">
          <img
            src="https://img.icons8.com/fluent/35/000000/twitter.png"
            alt=""
          />

          <img
            src="https://img.icons8.com/fluent/35/000000/facebook-new.png"
            alt=""
          />

          <img
            src="https://img.icons8.com/fluent/35/000000/whatsapp.png"
            alt=""
          />
        </div>

        <div className="footer__mainText">
          <p>All rights reserved by &copy; 2020 </p>
        </div>
      </div>

      <div className="footer__Links">
        <div className="footer__first">
          <ul>
            <li>
              <h2 className="footer__information">Information</h2>
              <ul className="footer__firstList">
                <li>About-Us</li>
                <li>Services</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer__second">
          <ul>
            <li>
              <h2 className="footer__tours">Tours</h2>
              <ul className="footer__secondList">
                <li>Foriegn</li>
                <li>Azerbazian</li>
                <li>New-Tours</li>
                <li>Popular-Tours</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer__third">
          <ul>
            <li class="features">
              <h2 className="footer__contact">Contact</h2>
              <ul className="footer__thirdList">
                <li>Address Line </li>
                <li>Address  </li>
                <li>Phone</li>
                <li>Email</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
