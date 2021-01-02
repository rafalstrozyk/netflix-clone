import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/Slider/Slider';
import RowHeader from 'components/Headers/RowHeader';
import styled from 'styled-components';

const StyledIndex = styled.div`
  position: relative;
  z-index: ${({ indexHange }) => (indexHange ? '20' : '1')};
`;

const RowSlider = ({ content, title, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledIndex
      indexHange={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <RowHeader href={href}>{title}</RowHeader>
      <Slider content={content} />
    </StyledIndex>
  );
};

RowSlider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  href: PropTypes.string.isRequired,
};
RowSlider.defaultProps = {
  content: [],
};

export default RowSlider;
