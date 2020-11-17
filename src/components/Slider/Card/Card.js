import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: inline-block;
  padding: 0 4px;
  cursor: pointer;

  :first-of-type {
    padding-left: 0;
  }

  :last-of-type {
    padding-right: 0;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;

  transition: transform 0.3s ease-in-out;
  :hover {
    transform: matrix(1.2, 0, 0, 1.2, 0, -10);
    z-index: 10;
    box-shadow: inset 5px 5px 15px #000, 5px 5px 15px #000;

    .styled-card-back {
      height: 100%;
      display: block;
    }
  }

  .styled-card-back {
    background-color: ${({ theme }) => theme.backColor};
    height: 0;
    display: none;
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
          <StyledContainer>
            <a href="/">
              <img src={movie.img} alt={movie.title} />
            </a>
            <div className="styled-card-back">
              <button type="button">button1</button>
              <button type="button">button1</button>
              <button type="button">button1</button>
              <button type="button">button1</button>
            </div>
          </StyledContainer>
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
