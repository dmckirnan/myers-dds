import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ name, dotClick, dotIndex }) =>
  (
    <span className={name} onClick={() => dotClick(dotIndex)} />
  );

Dot.propTypes = {
  name: PropTypes.string.isRequired,
  dotClick: PropTypes.func.isRequired,
  dotIndex: PropTypes.number.isRequired,
};

export default Dot;
