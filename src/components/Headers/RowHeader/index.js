import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.h2`
  line-height: 1.3;
  margin: 0;
`;

const StyledTitleLink = styled.a`
  margin-left: 60px;
  font-size: 1.4vw;
  color: #e5e5e5;
  font-weight: 700;
  margin: 0 4% 0.5em 4%;
  text-decoration: none;
  display: inline-block;
  min-width: 6em;
`;

const StyledTitle = styled.div`
  display: table-cell;
  vertical-align: bottom;
  line-height: 1.25vw;
  font-size: 1.4vw;
`;

const RowHeader = ({ children, href }) => (
  <StyledHeader>
    <StyledTitleLink href={href}>
      <StyledTitle>{children}</StyledTitle>
    </StyledTitleLink>
  </StyledHeader>
);

RowHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  href: PropTypes.string.isRequired,
};

export default RowHeader;
