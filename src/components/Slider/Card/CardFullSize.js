import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from 'components/Headers/HeaderOne';
import { Context } from 'state/store';

const StyledCardFullSize = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardContent = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CardFullSize = () => {
  const {
    state: { movie, movieIsOpen },
  } = useContext(Context);
  return (
    <>
      {movieIsOpen && (
        <StyledCardFullSize>
          {movie && (
            <StyledCardContent img={movie.img}>
              <div className="card-back">
                <div className="header">
                  <Header as="h4">{movie.title}</Header>
                </div>

                <div className="overview">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </StyledCardContent>
          )}
        </StyledCardFullSize>
      )}
    </>
  );
};

export default CardFullSize;
