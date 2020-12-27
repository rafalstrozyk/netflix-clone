import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonRoundIcon = styled.button`
  display: block;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${({ secondary }) => (secondary ? 'rgba(255,255,255,0.5)' : 'white')};
  background-color: ${({ secondary, theme }) => (secondary ? theme.backColor : 'white')};
  position: relative;
  padding: 8px;
  outline: none;
  display: flex;
  align-items: center;
  align-content: center;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  transition: border 0.2s, background-color 0.2s ease-in-out;

  :hover {
    ${({ secondary, theme }) => !secondary && `background-color: ${theme.fontColorSecondaryTwo};`}
    border-color:${({ secondary, theme }) =>
      secondary ? 'rgba(255,255,255,1)' : theme.fontColorSecondaryTwo};
  }

  .cloud {
    position: absolute;
    background-color: white;
    top: -100%;
    left: 0;
    right: 0;
  }

  .icon {
    position: absolute;
    top: 20%;

    left: 0;
    right: 0%;
    svg {
      fill: ${({ secondary, theme }) => (secondary ? 'white' : theme.backColor)};
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const ButtonRoundIcon = ({ children, onClick, as, secondary, cloudText }) => (
  <StyledButtonRoundIcon onClick={onClick} as={as} secondary={secondary}>
    <div className="icon">{children}</div>
    {cloudText.length > 0 && <div className="cloud">{cloudText}</div>}
  </StyledButtonRoundIcon>
);

ButtonRoundIcon.propTypes = {
  children: PropTypes.element.isRequired,
  as: PropTypes.string,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  cloudText: PropTypes.string,
};

ButtonRoundIcon.defaultProps = {
  as: 'button',
  secondary: false,
  cloudText: '',
  onClick: null,
};

export default ButtonRoundIcon;
