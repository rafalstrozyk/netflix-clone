import React, { useContext, useEffect } from 'react';
import { Context } from 'state/store';

import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import SliderGroup from 'components/Slider/SlidersGroup';

const Films = () => {
  const { state } = useContext(Context);
  const isMovie = () => {
    let movies = null;
    if (state.content.filter((item) => item.type === 'movies')[0]) {
      movies = state.content.filter((item) => item.type === 'movies')[0].content;
    }
    return movies;
  };
  let movie = isMovie();

  useEffect(() => {
    movie = isMovie();
  }, [state.content]);

  return (
    <>
      {state.content.length > 0 ? (
        <>
          <Bilboard movies={movie} />

          <SliderGroup>
            {state.content.map((item) => (
              <>
                {item.content[0].type === 'movie' && (
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

export default Films;
