import React, { useContext, useEffect } from 'react';
import { Context } from 'state/store';
import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';

const New = () => {
  const { state } = useContext(Context);
  const isNew = () => {
    let movies = null;
    state.content.forEach((content) => {
      movies = content.content.filter((item) => item.new);
    });
    return movies;
  };
  let movie = isNew();

  useEffect(() => {
    movie = isNew();
  }, [state.content]);

  return (
    <>
      {state.content.length > 0 ? (
        <>
          <Bilboard movies={movie} />

          <SliderGroup>
            {state.content.map((item) => (
              <>
                {item.content[0].new && (
                  <RowSlider key={item.id} title={item.title} href="/" content={item.content} />
                )}
              </>
            ))}
          </SliderGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default New;
