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

const Card = ({ movie, width }) => {
  return (
    <>
      {movie && (
        <StyledCard style={{ width: `${width}%` }}>
          <a href="/">
            <img src={movie.img} alt={movie.title} />
          </a>
        </StyledCard>
      )}
    </>
  );
};

Card.propTypes = {
  movie: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Card.defaultProps = {
  width: '100px',
};

export default Card;
