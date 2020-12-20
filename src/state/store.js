import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Reducer from 'state/reducer';

const initialState = {
  movies: [],
  movie: {
    title: 'Christmas Crossfire',
    overview:
      "A man foils an attempted murder, then flees the crew of would-be killers along with their intended target as a woman he's just met tries to find him.",
    id: 765123,
    img: 'https://image.tmdb.org/t/p/original/ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg',
  },
  movieIsOpen: true,
};
export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

Store.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Store;
