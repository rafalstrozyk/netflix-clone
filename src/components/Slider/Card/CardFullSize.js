import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Header from 'components/Headers/HeaderOne';
import { Context } from 'state/store';
import ButtonRoundIcon from 'components/Buttons/ButtonRoundIcon';
import { useOutsideAlerter } from 'hooks/useOutside';
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
  overflow: auto;
`;

const StyledCardBackImg = styled.img`
  height: auto;
  width: 20vw;
`;

const StyledCardBack = styled.div`
  background-color: ${({ theme }) => theme.backColor};
  width: 20vw;
  padding: 10px;

  .buttons-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    > *:not(:first-child) {
      margin-left: 8px;
    }
  }
`;

const Container = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 5px 5px 15px #000, 5px 5px 15px #000;
`;

const CardFullSize = () => {
  const {
    dispatch,
    state: { movie, movieIsOpen },
  } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef(null);
  function handlerIsOpen(value) {
    dispatch({ type: 'SET_IS_OPEN', payload: value });
    setIsOpen(value);
  }
  useOutsideAlerter(outsideRef, handlerIsOpen);

  useEffect(() => {
    setIsOpen(movieIsOpen);
  }, [movieIsOpen]);
  return (
    <>
      {isOpen && (
        <StyledCardFullSize>
          {movie && (
            <Container ref={outsideRef}>
              <StyledCardBackImg src={movie.img} alt={movie.title} />
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
