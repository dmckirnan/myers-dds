import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const current = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
  };
  return <div className="slide" style={styles.imageBackground} />;
};

Slide.propTypes = {
  background: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  current: PropTypes.number.isRequired,
};

export default Slide;
