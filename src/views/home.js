import React, { useContext } from 'react';
import { Context } from 'state/store';

import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';

const Home = () => {
  const { state } = useContext(Context);
  return (
    <>
      {state.content.length > 0 ? (
        <>
          <Bilboard movies={state.content[0].content} />
          <SliderGroup>
            {state.content.map((item) => (
              <RowSlider key={item.id} title={item.title} href="/" content={item.content} />
            ))}
          </SliderGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
