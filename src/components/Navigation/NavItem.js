import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'nav-item-active';

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${({ theme }) => theme.fontColorSecondaryTwo};
  transition: color 0.4s;
  text-decoration: none;
  cursor: 'pointer';
  background-color: transparent;
  :focus,
  :hover {
    color: ${({ theme }) => theme.fontColorSecondaryThree};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.fontColorSecondaryOne};
    font-weight: 700;
    cursor: default;
    pointer-events: 'none';
  }
`;

const NavItem = ({ exact, to, children }) => (
  <StyledNavLink exact={exact} to={to}>
    {children}
  </StyledNavLink>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  exact: PropTypes.bool,
};

NavItem.defaultProps = {
  exact: false,
};

export default NavItem;
