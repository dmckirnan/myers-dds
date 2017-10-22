import React from 'react';
import '../styles/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <h3>
        Dr.Meyers
        <span>DDS</span>
      </h3>
      <p className="footer-name">Dr. Meyers @ 2017</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>21 Harbor Blvd.</span>
          Fullerton, California 92792
        </p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+1 (714) 870-1052</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <a href="mailto:dmckirnan@hotmail.com">fullertonsmiles.com</a>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company">
        <span>Our Location</span>
        Random Location Info .... Corner of Harbor and X
      </p>
      <img src="http://fullertonsmiles.net/images/map_21.jpg" alt="map" />
    </div>
  </footer>
);

export default Footer;
