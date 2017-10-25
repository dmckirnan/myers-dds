import React from 'react';
import PropTypes from 'prop-types';

const Services = ({ services }) => {
  const arr = services.map((x, index) =>
    (
      <li key={index}>
        {x.name}
        <img
          src={x.img}
          alt={x.name}
        />
      </li>
    ));

  return (
    <ul>
      {arr}
    </ul>
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
