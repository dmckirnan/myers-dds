import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = props =>
  (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );

RightArrow.propTypes = {
  nextSlide: PropTypes.func.isRequired,
};

export default RightArrow;
