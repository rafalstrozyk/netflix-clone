import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from 'state/store';
import { moviesLoader } from 'axios/functions';

const MoviesConsumer = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    moviesLoader().then((data) => dispatch({ type: 'SET_MOVIES', payload: data }));
  }, []);

  return <>{children}</>;
};

MoviesConsumer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MoviesConsumer;
