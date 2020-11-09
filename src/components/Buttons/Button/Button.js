import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  // hasLabel hasIcon 1.6rem hasIcon and Label 2rem 2.4rem
  padding-left: ${({ hasLabel, hasIcon }) => {
    let variable = '';
    if (hasLabel && hasIcon) {
      variable = '2rem';
    } else if (hasIcon) {
      variable = '1.6rem';
    } else if (hasLabel) {
      variable = '2.4rem';
    }
    return variable;
  }};
  padding-right: ${({ hasIcon }) => (hasIcon ? '1.6rem' : '2.4rem')};

  //color Primary
  background-color: ${({ secondary }) => (secondary ? 'rgba(109, 109, 110, 0.4)' : 'white')};
  color: ${({ secondary }) => (secondary ? 'white' : 'black')};

  svg {
    fill: ${({ secondary }) => (secondary ? 'white' : 'black')};
  }

  display: flex;
  align-items: center;
  appearance: none;
  border: 0px;

  cursor: pointer;
  justify-content: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  position: relative;
  white-space: nowrap;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s;

  :not(:disabled):focus::before {
    box-sizing: content-box;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border: 2px solid white;
    border-radius: 8px;
    padding: 2px;
    position: absolute;
    left: -4px;
    top: -4px;
  }

  :not(:disabled):hover {
    background-color: ${({ secondary }) =>
      secondary ? 'rgba(109, 109, 110, 0.4)' : 'rgba(255, 255, 255, 0.75)'};
  }
  :not(:disabled):active {
    background-color: ${({ secondary }) =>
      secondary ? 'rgba(109, 109, 110, 0.4)' : 'rgba(255, 255, 255, 0.5)'};
    color: ${({ secondary }) => (secondary ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)')};

    svg {
      fill: ${({ secondary }) => (secondary ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)')};
    }
  }
`;

const StyledIconWrapper = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  display: inline-block;
  margin-right: ${({ hasLabel }) => hasLabel && '8px'};

  svg {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLabel = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
`;

const ButtonPrimary = ({ type, hasLabel, hasIcon, secondary }) => (
  <StyledButton type={type} hasLabel={hasLabel} hasIcon={hasIcon} secondary={secondary}>
    {hasIcon && <StyledIconWrapper hasLabel={hasLabel}>{hasIcon}</StyledIconWrapper>}
    {hasLabel && <StyledLabel>{hasLabel}</StyledLabel>}
  </StyledButton>
);

ButtonPrimary.propTypes = {
  type: PropTypes.string,
  hasLabel: PropTypes.string,
  hasIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  secondary: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  type: 'button',
  hasLabel: null,
  hasIcon: null,
  secondary: false,
};

export default ButtonPrimary;
