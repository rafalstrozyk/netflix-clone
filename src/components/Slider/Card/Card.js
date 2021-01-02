import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/Headers/HeaderOne';
import { Context } from 'state/store';

import ButtonRoundIcon from 'components/Buttons/ButtonRoundIcon';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as ThumbsDownIcon } from 'assets/icons/thumbs-down.svg';
import { ReactComponent as ThumbsUpIcon } from 'assets/icons/thumbs-up.svg';
import { ReactComponent as CheckmarkIcon } from 'assets/icons/checkmark.svg';

const StyledCard = styled.div`
  display: inline-block;
  padding: 0 4px;

  vertical-align: middle;
  transition-duration: 0.4s;
  position: relative;
  z-index: 2;

  .card-back {
    background-color: ${({ theme }) => theme.backColor};
    padding: 0 10px;
    display: block;
    position: absolute;
    max-width: 98%;
    top: 0;
    left: 4px;
    z-index: -10;
    opacity: 0;
    visibility: hidden;
    box-shadow: inset 5px 5px 15px #000, 5px 5px 15px #000;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;

    .header {
      margin: 25px 0;
    }

    .buttons-group {
      display: flex;
      margin-bottom: 20px;
      > *:not(:first-child) {
        margin-left: 8px;
      }
    }

    .overview {
      margin-top: -25px;
      margin-bottom: 10px;
      position: relative;
      padding: 0 20px;
      p {
        word-break: break-all;
        white-space: normal;
        font-size: 1.2rem;
      }
    }
  }

  .back-image {
    display: block;
    max-width: 100%;
    border-radius: 4px;
  }

  :first-of-type {
    padding-left: 0;
  }

  :last-of-type {
    padding-right: 0;
  }

  :hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2, 1.2);
    z-index: 20 !important;
    .shadow {
      box-shadow: inset 5px 5px 15px #000, 5px 5px 15px #000;
    }

    .card-back {
      display: flex;
      z-index: 15 !important;
      top: 98%;
      visibility: visible;
      flex-direction: column;
      align-items: center;
      opacity: 1;
    }
  }
`;

const Card = ({ content, width }) => {
  const { dispatch } = useContext(Context);
  function maxWords(str) {
    const words = str.split(' ');
    const newWords = [];
    for (let i = 0; i < 10; i++) {
      newWords.push(words[i]);
    }
    newWords.push('...');
    const newString = newWords.join(' ');
    return newString;
  }

  function handleAddToMyList() {
    dispatch({ type: 'ADD_MY_LIST', payload: content.id });
  }

  function handleIsOpen() {
    dispatch({ type: 'SET_MOVIE', payload: content });
    dispatch({ type: 'SET_IS_OPEN', payload: true });
  }

  return (
    <>
      {content ? (
        <StyledCard style={{ width: `${width}%` }}>
          <div className="shadow">
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleIsOpen}
              onKeyPress={handleIsOpen}
              role="button"
              tabIndex="0"
            >
              <img src={content.img} className="back-image" alt={content.title} />
            </div>
            <div className="card-back">
              <div className="header">
                <Header as="h4">{content.title}</Header>
              </div>

              <div className="overview">
                <p>{maxWords(content.overview)}</p>
              </div>

              <div className="buttons-group">
                <ButtonRoundIcon>
                  <PlayIcon />
                </ButtonRoundIcon>
                <ButtonRoundIcon onClick={handleAddToMyList} secondary>
                  {content.my_list ? <CheckmarkIcon /> : <PlusIcon />}
                </ButtonRoundIcon>
                <ButtonRoundIcon secondary>
                  <ThumbsUpIcon />
                </ButtonRoundIcon>
                <ButtonRoundIcon secondary>
                  <ThumbsDownIcon />
                </ButtonRoundIcon>
              </div>
            </div>
          </div>
        </StyledCard>
      ) : null}
    </>
  );
};

Card.propTypes = {
  content: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Card.defaultProps = {
  width: '100px',
  content: null,
};

export default Card;
