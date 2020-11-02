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
  outline: none;

  svg {
    fill: ${({ theme }) => theme.fontColorSecondaryOne};
    width: 100%;
    height: auto;
  }
`;

const ButtonIcon = ({ type, Icon, onClick }) => (
  <ButtonIconStyled as={type} onClick={onClick}>
    <Icon />
  </ButtonIconStyled>
);

ButtonIcon.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.object, PropTypes.element]).isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  type: 'div',
  onClick: null,
};

export default ButtonIcon;
