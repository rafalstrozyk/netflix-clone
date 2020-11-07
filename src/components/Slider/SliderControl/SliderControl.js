import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as ChevronLeftIcon } from 'assets/icons/chevron-thin-left.svg';
import { ReactComponent as ChevronRightIcon } from 'assets/icons/chevron-thin-right.svg';

const StyledSliderControl = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4%;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  z-index: 20;
  :hover {
    background: rgba(20, 20, 20, 0.7);

    svg {
      opacity: 1;
    }
  }
  // Left Button direction
  left: ${({ direction }) => direction === 'left' && '-8px'};
  border-bottom-right-radius: ${({ direction }) => direction === 'left' && '4px'};
  border-top-right-radius: ${({ direction }) => direction === 'left' && '4px'};
  // Right Button direction
  border-top-left-radius: ${({ direction }) => direction === 'right' && '4px'};
  border-bottom-left-radius: ${({ direction }) => direction === 'right' && '4px'};
  right: ${({ direction }) => direction === 'right' && '-8px'};
  svg {
    fill: #fff;
    opacity: 0;
  }
`;

const SliderControl = ({ direction, onClick }) => (
  <StyledSliderControl
    direction={direction}
    onClick={onClick}
    onKeyDown={onClick}
    tabIndex={0}
    role="button"
  >
    <div>{direction === 'right' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</div>
  </StyledSliderControl>
);

SliderControl.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SliderControl;
