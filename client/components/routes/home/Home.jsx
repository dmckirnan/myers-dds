import React from 'react';
import PropTypes from 'prop-types';

import Slider from './slider/Slider.jsx';
import Services from './Services.jsx';

const Home = ({ services }) => (
  <div id="home-container">
    <Slider />
    <Services services={services} />
  </div>
);

Home.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Home;
