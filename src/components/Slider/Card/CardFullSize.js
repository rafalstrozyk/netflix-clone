import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from 'components/Headers/HeaderOne';
import { Context } from 'state/store';
import ButtonRoundIcon from 'components/Buttons/ButtonRoundIcon';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as ThumbsDownIcon } from 'assets/icons/thumbs-down.svg';
import { ReactComponent as ThumbsUpIcon } from 'assets/icons/thumbs-up.svg';

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

const StyledCardBackImg = styled.div`
  height: 600px;
  width: 600px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StyledCardBack = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backColor};
  width: 404px;
  top: 70%;
  left: 16%;
  padding: 10px;

  .buttons-group {
    display: flex;
    margin-bottom: 20px;
    > *:not(:first-child) {
      margin-left: 8px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
            <Container>
              <StyledCardBackImg img={movie.img} />
              <StyledCardBack>
                <div>
                  <Header as="h4">{movie.title}</Header>
                </div>

                <div>
                  <p>{movie.overview}</p>
                </div>
                <div className="buttons-group">
                  <ButtonRoundIcon>
                    <PlayIcon />
                  </ButtonRoundIcon>
                  <ButtonRoundIcon secondary>
                    <PlusIcon />
                  </ButtonRoundIcon>
                  <ButtonRoundIcon secondary>
                    <ThumbsUpIcon />
                  </ButtonRoundIcon>
                  <ButtonRoundIcon secondary>
                    <ThumbsDownIcon />
                  </ButtonRoundIcon>
                </div>
              </StyledCardBack>
            </Container>
          )}
        </StyledCardFullSize>
      )}
    </>
  );
};

export default CardFullSize;
