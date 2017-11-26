import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = props =>
  (
    <div className="backArrow" onClick={props.previousSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );

LeftArrow.propTypes = {
  previousSlide: PropTypes.func.isRequired,
};

export default LeftArrow;
