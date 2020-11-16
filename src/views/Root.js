import React, { useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Navigation from 'components/Navigation/Navigation';
import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
import { moviesLoader } from 'axios/functions';

const Root = () => {
  const [movies, setMovies] = useState(null);
  const [headerMovie, setHeaderMovie] = useState(null);

  useEffect(() => {
    moviesLoader().then((data) => {
      setHeaderMovie(data[0]);
      setMovies(data);
    });
  }, []);

  return (
    <MainTemplate>
      <Navigation />
      {movies ? (
        <>
          <Bilboard movie={headerMovie} />
          <RowSlider title="Test" href="/" movies={movies} />
          <RowSlider title="Test" href="/" movies={movies} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </MainTemplate>
  );
};

export default Root;
