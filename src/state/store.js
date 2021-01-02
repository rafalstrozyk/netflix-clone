import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Reducer from 'state/reducer';

const initialState = {
  content: [],
  movie: {},
  movieIsOpen: false,
  searchString: '',
};
export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]).isRequired,
};

export default Store;
