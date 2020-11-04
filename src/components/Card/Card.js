import React from 'react';
import styled from 'styled-components';
import image from 'assets/images/video/io.jpg';

const StyledCard = styled.div`
  display: block;
  position: relative;
  z-index: 1;
`;

const StyledBoxard = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  padding: 28.125%;
  border-radius: 4px;
`;

const StyledImage = styled.img`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const FalbackTextContainer = styled.div`
  border-radius: 4px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
  background-color: #222;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: -1;
`;

const FalbackText = styled.p`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 8%;
  right: 8%;
  margin: 0;
  padding: 0 0 10%;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Card = () => (
  <StyledCard>
    <a href="/">
      <StyledBoxard>
        <StyledImage src={image} alt="video" />
      </StyledBoxard>
      <FalbackTextContainer>
        <FalbackText>IO</FalbackText>
      </FalbackTextContainer>
    </a>
  </StyledCard>
);

export default Card;
