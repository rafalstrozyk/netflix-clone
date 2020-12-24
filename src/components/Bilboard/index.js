import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Buttons/Button/Button';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/info-with-circle.svg';

const StyledBilboard = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
  background-size: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  > * {
    padding: 0 4%;
  }

  &::before {
    content: '';
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: -5px;
    background-image: linear-gradient(to top, rgba(20, 20, 20, 1) 20%, rgba(20, 20, 20, 0));
  }
`;

const StyledWrapper = styled.div`
  width: 600px;
  background-color: rgba(20, 20, 20, 0.8);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-bottom: 1.5rem;
  h3 {
    font-size: 2.5rem;
  }

  p {
    margin: 3rem 0;
  }
`;

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  button:first-child {
    margin-right: 8px;
  }
`;

const Bilboard = ({ movies }) => {
  const movie = {
    title: '',
    overview: '',
    img: '',
  };
  if (movies.length > 0) {
    movie.title = movies[0].title;
    movie.overview = movies[0].overview;
    movie.img = movies[0].img;
  }

  return (
    <>
      {movies && (
        <StyledBilboard img={movie.img}>
          <StyledWrapper>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <StyledButtonsGroup>
              <Button hasLabel="Odtwórz" hasIcon={<PlayIcon />} />
              <Button secondary hasLabel="Więcej informacji" hasIcon={<InfoIcon />} />
            </StyledButtonsGroup>
          </StyledWrapper>
        </StyledBilboard>
      )}
    </>
  );
};

Bilboard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

Bilboard.defaultProps = {
  movies: [],
};

export default Bilboard;
