import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from 'state/store';
import { moviesLoader, tvLoader, newMoviesLoader, newTvsLoader } from 'axios/functions';

const MoviesConsumer = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    moviesLoader().then((data) => dispatch({ type: 'SET_CONTENT', payload: data }));
    tvLoader().then((data) => dispatch({ type: 'SET_CONTENT', payload: data }));
    newMoviesLoader().then((data) => dispatch({ type: 'SET_CONTENT', payload: data }));
    newTvsLoader().then((data) => dispatch({ type: 'SET_CONTENT', payload: data }));
  }, []);

  return <>{children}</>;
};

MoviesConsumer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MoviesConsumer;
