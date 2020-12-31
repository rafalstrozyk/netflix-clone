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
              <RowSlider key={item.id} title={item.title} href="/" movies={item.movies} />
            ))}
            {state.tvs.length > 0 && (
              <>
                {state.tvs.map((item) => (
                  <RowSlider key={item.id} title={item.title} href="/" tvs={item.tvs} />
                ))}
              </>
            )}
          </SliderGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
