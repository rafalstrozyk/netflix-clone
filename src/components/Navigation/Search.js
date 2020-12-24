import React, { useState, createRef, useContext } from 'react';
import styled from 'styled-components';
import TransitionTemplate from 'templates/TransitionTemplate';
import { Context } from 'state/store';
import ButtonIcon from 'components/Buttons/ButtonIcon/ButtonIcon';
import { ReactComponent as SearchIocon } from 'assets/icons/magnifying-glass.svg';
import { useOutsideAlerter } from 'hooks/useOutside';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;

  background-color: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 'rgba(0, 0, 0, 0.7)' : 'transparent'};
  border: ${({ state }) =>
    state === 'entering' || state === 'entered' ? '1px solid #fff' : 'none'};
  div {
    width: ${({ state }) => (state === 'entering' || state === 'entered' ? '200px' : '0')};
    opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? '1' : '0')};
    transform: translateY(${({ state }) => state === 'exited' && '-300%'});
    transition: width 0.4s, opacity 0.4s ease-in-out;
    input {
      opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? '1' : '0')};
      transition: opacity 0.2s ease-in-out;
    }
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
  }
`;

const StyledButton = styled(ButtonIcon)`
  margin-right: 10px;
`;

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputFocus = createRef();
  const outsideRef = createRef();
  useOutsideAlerter(outsideRef, setIsOpen);
  const { dispatch } = useContext(Context);

  const handleFocus = () => {
    setIsOpen(!isOpen);
    inputFocus.current.focus();
  };

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH_STRING', payload: e.target.value });
  };

  return (
    <div ref={outsideRef}>
      <TransitionTemplate timeout={400} isOpen={isOpen}>
        <StyledSearch>
          <StyledButton Icon={SearchIocon} type="button" onClick={handleFocus} />
          <div>
            <input
              ref={inputFocus}
              onChange={(e) => handleSearch(e)}
              placeholder="Tytuły, osoby, gatunki"
              type="text"
            />
          </div>
        </StyledSearch>
      </TransitionTemplate>
    </div>
  );
};

export default Search;
