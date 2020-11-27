import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const TransitionTemplate = ({ children, isOpen, timeout }) => {
  return (
    <Transition in={isOpen} timeout={timeout}>
      {(state) => React.cloneElement(children, { state })}
    </Transition>
  );
};

TransitionTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  timeout: PropTypes.number.isRequired,
};

export default TransitionTemplate;
