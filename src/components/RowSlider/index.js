import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/Slider/Slider';
import RowHeader from 'components/Headers/RowHeader';

const RowSlider = ({ movies, title, href }) => (
  <div style={{ position: 'relative', zIndex: '1' }}>
    <RowHeader href={href}>{title}</RowHeader>
    <Slider movies={movies} />
  </div>
);

RowSlider.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  href: PropTypes.string.isRequired,
};
RowSlider.defaultProps = {
  movies: [],
};

export default RowSlider;
