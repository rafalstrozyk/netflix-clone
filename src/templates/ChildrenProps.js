import React, { useContext, Children } from 'react';
import PropTypes from 'prop-types';
import { Context } from 'state/store';

const MoviesConsumer = ({ children, ...rest }) => {
  const [state] = useContext(Context);

  const childrensWitchProps = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { movies: state.movies, ...rest });
    }
    return null;
  });

  return (
    <>
      {state.movies && (
        <>
          {childrensWitchProps.map((childProps) => (
            <div key={`movies-slider-${childProps.key}`}>{childProps}</div>
          ))}
        </>
      )}
    </>
  );
};

MoviesConsumer.propTypes = {
  children: PropTypes.element.isRequired,
  rest: PropTypes.oneOf(
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ),
};

MoviesConsumer.defaultProps = {
  rest: null,
};

export default MoviesConsumer;
