import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronLeftIcon } from 'assets/icons/chevron-thin-left.svg';
import { ReactComponent as ChevronRightIcon } from 'assets/icons/chevron-thin-right.svg';

const Container = styled.div`
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  position: relative;
  z-index: 0;
`;

const RowContent = styled.div`
  padding: 0;
  box-sizing: border-box;
`;

const Slider = styled.div`
  z-index: 2;
  position: relative;
  margin: 0;
  padding: 0 4%;
  touch-action: pan-y;
`;

const ButtonSlider = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  text-align: center;
  justify-content: center;
  display: flex;
  color: #fff;
`;

const ButtonSliderLeft = styled(ButtonSlider)`
  left: -2px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

const ButtonSliderRight = styled(ButtonSlider)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  right: 0;
`;

const Row = () => (
  <Container>
    <RowContent>
      <Slider>
        <ButtonSliderLeft>
          <ChevronLeftIcon />
        </ButtonSliderLeft>
        <ButtonSliderRight>
          <ChevronRightIcon />
        </ButtonSliderRight>
      </Slider>
    </RowContent>
  </Container>
);

export default Row;
