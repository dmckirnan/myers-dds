import React from 'react';
import PropTypes from 'prop-types';

import Dot from './Dot';

const Dots = (props) => {
  const arr = [];

  for (let i = 0; i < props.numberOfDots; i += 1) {
    const name = props.isCurrent === i ? 'isCurrent dot' : 'dot';
    arr.push(<Dot key={i} name={name} dotClick={props.dotClick} dotIndex={i} />);
  }

  return (
    <div className="dotsContainer">
      {arr}
    </div>
  );
};

Dots.propTypes = {
  numberOfDots: PropTypes.number.isRequired,
  isCurrent: PropTypes.number.isRequired,
  dotClick: PropTypes.func.isRequired,
};

export default Dots;
