import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 0 4px;

  :first-of-type {
    padding-left: 0;
  }

  :last-of-type {
    padding-right: 0;
  }

  a {
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    border-radius: 4px;
  }
`;

const Card = ({ movie: { image, alt, href, width } }) => (
  <StyledCard style={{ width: `${width}%` }}>
    <a href={href}>
      <img src={image} alt={alt} />
    </a>
  </StyledCard>
);

Card.propTypes = {
  movie: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

Card.defaultProps = {
  movie: null,
};

export default Card;
