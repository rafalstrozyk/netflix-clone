import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoImage from 'assets/images/Netflix_Logo_PMS.png';

const StyledLink = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;

  img {
    height: ${({ height }) => height};
    width: auto;
  }
`;

const Logo = ({ to, height }) => (
  <StyledLink height={height} href={to}>
    <img src={logoImage} alt="Logo" />
  </StyledLink>
);

Logo.propTypes = {
  to: PropTypes.string.isRequired,
  height: PropTypes.string,
};

Logo.defaultProps = {
  height: '50px',
};

export default Logo;
