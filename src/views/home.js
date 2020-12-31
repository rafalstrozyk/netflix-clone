import React, { useContext } from 'react';
import { Context } from 'state/store';

import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';

const Home = () => {
  const { state } = useContext(Context);
  return (
    <>
      {state.movies.length > 0 ? (
        <>
          <Bilboard movies={state.movies[0].movies} />
          <SliderGroup>
            {state.movies.map((item) => (
              <RowSlider title={item.title} href="/" movies={item.movies} />
            ))}
          </SliderGroup>

          {/* <SliderGroup>
            
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
            <RowSlider title="Consumer Test" href="/" movies={state.movies} />
          </SliderGroup> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
