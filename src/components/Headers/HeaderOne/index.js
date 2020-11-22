import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContener = styled.div`
  margin: 0;
  padding: 0;
  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.9rem;
  }

  h4 {
    font-size: 1.7rem;
  }
`;
const StyledHeader = styled.div`
  color: #fff;
  line-height: 1.2;
  letter-spacing: 3px;
  margin: 0;
  padding: 0;
`;

const Header = ({ as, children }) => (
  <StyledContener>
    <StyledHeader as={as}>{children}</StyledHeader>
  </StyledContener>
);

Header.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
};

Header.defaultProps = {
  as: 'h1',
};

export default Header;
