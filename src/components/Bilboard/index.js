import React from 'react';
import image from 'assets/images/video/hero.jpg';
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  > * {
    padding: 0 4%;
  }
`;

const Bilboard = () => (
  <StyledBilboard img={image}>
    <h3>Movie</h3>
    <div>
      <Button hasLabel="Odtwórz" hasIcon={<PlayIcon />} />
      <Button secondary hasLabel="Więcej informacji" hasIcon={<InfoIcon />} />
    </div>
  </StyledBilboard>
);

export default Bilboard;
