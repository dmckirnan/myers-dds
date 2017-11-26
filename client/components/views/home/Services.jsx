import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Services.scss';

const Services = ({ services }) => {
  const arr = services.map((x, index) =>
    (
      <li className="service" key={index}>
        <div className="img">
          <img
            src={x.img}
            alt={x.name}
          />
        </div>
        <div className="info">
          <h5>{x.name}</h5>
        </div>
      </li>
    ));

  return (
    <section className="services">
      <ul className="services-list">
        {arr}
      </ul>
    </section>
  );
};

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Services;
