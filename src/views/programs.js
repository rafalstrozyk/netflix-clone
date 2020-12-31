import React, { useContext } from 'react';
import { Context } from 'state/store';

import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';

const Programs = () => {
  const { state } = useContext(Context);
  return (
    <>
      {state.tvs.length > 0 ? (
        <>
          <Bilboard movies={state.tvs[0].tvs} />
          <SliderGroup>
            {state.tvs.map((item) => (
              <RowSlider key={item.id} title={item.title} href="/" tvs={item.tvs} />
            ))}
          </SliderGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Programs;
