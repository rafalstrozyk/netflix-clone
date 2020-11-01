import React, { useState } from 'react';
import styled from 'styled-components';
import UserAvatar from 'components/UserAvatar/UserAvatar';
import avatarImage from 'assets/images/user_avatar.jpg';
import UserDropDown from 'components/Navigation/UserDropDown';
import TransitionTemplate from 'templates/TransitionTemplate';

const StyledMenuItem = styled.div`
  display: block;
  position: relative;
  font-size: 12px;
  z-index: 0;
`;

const StyledDropDownButton = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  display: block;
  pointer-events: none;

  span {
    position: relative;
    display: flex;
    align-items: center;

    img {
      vertical-align: middle;
      height: 32px;
      width: 32px;
      border-radius: 4px;
    }
  }
`;

const StyledCaret = styled.span`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
`;

const StyledDropDown = styled(UserDropDown)`
  position: absolute;
  top: 45px;
  right: 0%;
  display: ${({ state }) => state === 'exited' && 'none'};
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? '1' : '0')};
  transition: opacity 0.2s;
`;

const AcountMenuItem = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  return (
    <StyledMenuItem
      onClick={() => setDropDownIsOpen(!dropDownIsOpen)}
      onMouseEnter={() => setDropDownIsOpen(true)}
      onMouseLeave={() => setDropDownIsOpen(false)}
    >
      <StyledDropDownButton>
        <StyledLink href="/">
          <span>
            <UserAvatar imgUrl={avatarImage} />
          </span>
        </StyledLink>
        <StyledCaret />
      </StyledDropDownButton>
      <TransitionTemplate isOpen={dropDownIsOpen} timeout={200}>
        <StyledDropDown />
      </TransitionTemplate>
    </StyledMenuItem>
  );
};

export default AcountMenuItem;
