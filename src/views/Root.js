import React, { useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Navigation from 'components/Navigation/Navigation';
import Bilboard from 'components/Bilboard';
import RowSlider from 'components/RowSlider';
// import { videos } from 'data';
import axios from 'axios/axios';

const Root = () => {
  const [movies, setResponse] = useState(null);
  const [movieLoad, setMovieLoad] = useState(false);

  useEffect(() => {
    if (!movieLoad) {
      axios.get('/movie/popular').then((response) => {
        const resData = response.data;
        const moviesData = [];
        resData.results.forEach((item) => {
          const newItem = {
            title: item.title,
            overview: item.overview,
            id: item.id,
            img: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          };
          moviesData.push(newItem);
        });
        setResponse(moviesData);
        setMovieLoad(true);
      });
    }
  }, [movieLoad]);

  return (
    <MainTemplate>
      <Navigation />
      <Bilboard />
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
      {movies && <RowSlider title="Test" href="/" movies={movies} />}
    </MainTemplate>
  );
};

export default Root;
