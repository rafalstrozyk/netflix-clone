import React, { useContext } from 'react';
import { Context } from 'state/store';
import Navigation from 'components/Navigation/Navigation';
import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';
import CardFullSize from 'components/Slider/Card/CardFullSize';

const StateContener = () => {
  const { state } = useContext(Context);
  return (
    <>
      {state.movies.length > 0 ? (
        <>
          <CardFullSize />
          <Navigation />
          <Bilboard movies={state.movies} />
          <SliderGroup>
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
          </SliderGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default StateContener;
