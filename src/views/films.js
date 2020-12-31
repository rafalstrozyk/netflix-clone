import React, { useContext } from 'react';
import { Context } from 'state/store';

import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';

const Films = () => {
  const { state } = useContext(Context);
  return (
    <>
      {state.movies.length > 0 ? (
        <>
          <Bilboard movies={state.movies[0].movies} />
          <SliderGroup>
            {state.movies.map((item) => (
              <RowSlider key={item.id} title={item.title} href="/" movies={item.movies} />
            ))}
          </SliderGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Films;
