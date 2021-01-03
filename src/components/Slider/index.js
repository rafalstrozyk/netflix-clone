import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Slider/Card/Card';
import SliderControl from 'components/Slider/SliderControl';

const StyledSlider = styled.div`
  padding: 0 4%;
  position: relative;
  margin-bottom: 0;
  margin-top: 20px;
  z-index: 1;
`;

const Cards = styled.div`
  white-space: nowrap;
`;

const Slider = ({ content }) => {
  const [sliderHasMoved, setSliderHasMoved] = useState(false);
  const [sliderMoveDirection, setSliderMoveDirection] = useState(null);
  const [sliderMoving, setSliderMoving] = useState(false);
  const [movePercentage, setMovePercentage] = useState(0);
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0);
  const [itemsInRow, setItemsInRow] = useState(5);
  const totalItems = content.length;

  // alter number of items in row on window resize
  const handleWindowResize = () => {
    if (window.innerWidth > 1440) {
      setItemsInRow(5);
    } else if (window.innerWidth >= 1000) {
      setItemsInRow(4);
    } else if (window.innerWidth < 1000) {
      setItemsInRow(3);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  if (!content.length) return null;

  // render the slider contents
  const renderSliderContent = () => {
    // slider content made up of left, mid, and right portions to allow continous cycling
    const left = [];
    const mid = [];
    const right = [];

    // gets the indexes to be displayed
    for (let i = 0; i < itemsInRow; i++) {
      // left
      if (sliderHasMoved) {
        if (lowestVisibleIndex + i - itemsInRow < 0) {
          left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
        } else {
          left.push(i + lowestVisibleIndex - itemsInRow); // issue here
        }
      }

      // mid
      if (i + lowestVisibleIndex >= totalItems) {
        mid.push(i + lowestVisibleIndex - totalItems);
      } else {
        mid.push(i + lowestVisibleIndex);
      }

      // right
      if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
        right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
      } else {
        right.push(i + lowestVisibleIndex + itemsInRow);
      }
    }

    // combine left, mid, right to have all indexes
    const combinedIndex = [...left, ...mid, ...right];

    // add on leading and trailing indexes for peek image when sliding
    if (sliderHasMoved) {
      const trailingIndex =
        combinedIndex[combinedIndex.length - 1] === totalItems - 1
          ? 0
          : combinedIndex[combinedIndex.length - 1] + 1;

      combinedIndex.push(trailingIndex);
    }

    const leadingIndex = combinedIndex[0] === 0 ? totalItems - 1 : combinedIndex[0] - 1;
    combinedIndex.unshift(leadingIndex);

    const sliderContents = [];

    for (const index of combinedIndex) {
      sliderContents.push(
        <Card width={`${93 / itemsInRow}`} content={content[index]} index={index} key={index} />,
      );
    }

    // adds empty divs to take up appropriate spacing when slider at initial position
    if (!sliderHasMoved) {
      for (let i = 0; i < itemsInRow; i++) {
        sliderContents.unshift(
          <div className="slider-item" style={{ width: `${93 / itemsInRow}%` }} key={`${i}-key`} />,
        );
      }
    }

    return sliderContents;
  };

  const handlePrev = () => {
    // get the new lowest visible index
    let newIndex;
    if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
      newIndex = 0;
    } else if (lowestVisibleIndex - itemsInRow < 0) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex - itemsInRow;
    }

    // get the move percentage
    let newMovePercentage;
    if (lowestVisibleIndex === 0) {
      newMovePercentage = 0;
    } else if (lowestVisibleIndex - newIndex < itemsInRow) {
      newMovePercentage = ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
    } else {
      newMovePercentage = 0;
    }

    setSliderMoving(true);
    setSliderMoveDirection('left');
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
      setSliderMoveDirection(null);
    }, 850);
  };

  const handleNext = () => {
    // get the new lowest visible index
    let newIndex;
    if (lowestVisibleIndex === totalItems - itemsInRow) {
      newIndex = 0;
    } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex + itemsInRow;
    }

    // get the move percentage
    let newMovePercentage;
    if (newIndex !== 0) {
      newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
    } else {
      newMovePercentage = 100;
    }

    setSliderMoving(true);
    setSliderMoveDirection('right');
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
    }, 850);

    // slider has moved and show the previous arrow
    if (!sliderHasMoved) {
      setSliderHasMoved(true);
    }
  };

  let style = {};
  if (sliderMoving) {
    let translate = '';
    if (sliderMoveDirection === 'right') {
      translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
    } else if (sliderMoveDirection === 'left') {
      translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
    }

    style = {
      transform: translate,
      transitionDuration: '850ms',
    };
  } else {
    style = {
      transform: `translateX(-${100 + (sliderHasMoved ? 100 / itemsInRow : 0)}%)`,
    };
  }

  return (
    <StyledSlider>
      {sliderHasMoved && <SliderControl direction="left" onClick={handlePrev} />}
      <Cards style={style}>{renderSliderContent()}</Cards>
      <SliderControl direction="right" onClick={handleNext} />
    </StyledSlider>
  );
};

Slider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};
Slider.defaultProps = {
  content: [],
};

export default Slider;
