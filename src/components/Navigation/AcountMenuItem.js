import React from 'react';
import styled from 'styled-components';
import avatarImage from 'assets/images/user_avatar.jpg';

const StyledMenuItem = styled.div`
  display: block;
  position: relative;
  font-size: 12px;
  z-index: 0;
`;

const StyledDropDownButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  display: block;

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

const AcountMenuItem = () => (
  <StyledMenuItem>
    <StyledDropDownButton>
      <StyledLink href="/">
        <span>
          <img src={avatarImage} alt="avatar" />
        </span>
      </StyledLink>
      <StyledCaret />
    </StyledDropDownButton>
  </StyledMenuItem>
);

export default AcountMenuItem;
