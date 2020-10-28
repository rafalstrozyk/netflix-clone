import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonIconStyled = styled.div`
  display: block;
  cursor: pointer;
  border: none;
  text-decoration: none;
  background: transparent;
  padding: 0;
  width: 2rem;

  svg {
    fill: ${({ theme }) => theme.fontColorSecondaryOne};
    width: 100%;
    height: auto;
  }
`;

const ButtonIcon = ({ type, Icon }) => (
  <ButtonIconStyled as={type}>
    <Icon />
  </ButtonIconStyled>
);

ButtonIcon.propTypes = {
  Icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};

export default ButtonIcon;
