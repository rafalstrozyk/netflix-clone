import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavLink = styled.a`
  color: ${({ theme, navigate }) =>
    navigate ? theme.fontColorSecondaryOne : theme.fontColorSecondaryTwo};
  font-weight: ${({ navigate }) => navigate && 700};
  transition: color 0.4s;
  text-decoration: none;
  cursor: ${({ navigate }) => !navigate && 'pointer'};
  pointer-events: ${({ navigate }) => navigate && 'none'};
  background-color: transparent;
  :focus,
  :hover {
    color: ${({ theme }) => theme.fontColorSecondaryThree};
  }
`;

const NavItem = ({ href, children, navigate }) => (
  <StyledNavLink href={href} navigate={navigate}>
    {children}
  </StyledNavLink>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  navigate: PropTypes.bool,
};

NavItem.defaultProps = {
  navigate: false,
};

export default NavItem;
