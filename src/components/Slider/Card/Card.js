import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/Headers/HeaderOne';
import ButtonRoundIcon from 'components/Buttons/ButtonRoundIcon';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as ThumbsDownIcon } from 'assets/icons/thumbs-down.svg';
import { ReactComponent as ThumbsUpIcon } from 'assets/icons/thumbs-up.svg';

const StyledCard = styled.div`
  display: inline-block;
  padding: 0 4px;
  cursor: pointer;
  vertical-align: middle;
  transition-duration: 0.4s;
  position: relative;
  z-index: 2;

  margin-bottom: -200px;
  .card-back {
    background-color: ${({ theme }) => theme.backColor};
    padding: 10px;
    position: relative;
    z-index: -10;
    transform: translateY(-200%);
    /* display: none; */
  }

  .buttons-group {
    display: flex;
    > *:not(:first-child) {
      margin-left: 8px;
    }
  }

  .back-image {
    display: block;
    max-width: 100%;
    border-radius: 4px;
  }

  .overview {
    p {
      word-break: break-all;
      white-space: normal;
      font-size: 1.2rem;
    }
  }

  :first-of-type {
    padding-left: 0;
  }

  :last-of-type {
    padding-right: 0;
  }

  :hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1, 1.1);
    z-index: 20 !important;
    margin-top: -200px;
    .shadow {
      box-shadow: inset 5px 5px 15px #000, 5px 5px 15px #000;
    }

    .card-back {
      display: flex;
      z-index: 20;
      transform: translateY(0);
      /* flex-wrap: wrap; */
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Card = ({ movie, width }) => {
  return (
    <>
      {movie && (
        <StyledCard style={{ width: `${width}%` }}>
          <div className="shadow">
            <img src={movie.img} className="back-image" alt={movie.title} />
            <div className="card-back">
              <div className="header">
                <Header as="h4">{movie.title}</Header>
              </div>
              <div className="overview">
                <p>
                  In late 1967 a young orphaned boy goes to live with his loving grandma in the
                  rural Alabama town of Demopolis As the boy and his grandmother encounter some
                  deceptively glamorous but thoroughly diabolical witches, she wisely whisks him
                  away to a seaside resort Regrettably, they arrive at precisely the same time that
                  the worlds Grand High Witch has gathered
                </p>
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
            </div>
          </div>
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
