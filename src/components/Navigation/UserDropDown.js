import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'components/Link';
import UserAvatar from 'components/UserAvatar';
import avatarImage from 'assets/images/user_avatar.jpg';

const StyledUserDropDown = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  width: 180px;

  border: 1px solid rgba(179, 179, 179, 0.6);

  span {
    position: absolute;
    top: -5%;
    left: 75%;
    border-style: solid;
    border-width: 7px 7px 7px;
    border-color: transparent transparent #fff;
  }

  hr {
    border: 1px solid rgba(179, 179, 179, 0.6);
    margin-left: -10px;
    height: 0;
    width: calc(100% + 20px);
  }
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    margin-bottom: 10px;
  }
`;

const StyledListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover a {
    text-decoration: underline;
    outline: 0;
  }

  img {
    margin-right: 8px;
  }
`;

const UserDropDown = ({ className }) => (
  <StyledUserDropDown className={className}>
    <span />
    <StyledList>
      <StyledListItem>
        <UserAvatar imgUrl={avatarImage} />
        <Link href="/">Ktoś</Link>
      </StyledListItem>
      <StyledListItem>
        <UserAvatar imgUrl={avatarImage} />
        <Link href="/">Ktoś</Link>
      </StyledListItem>
      <StyledListItem>
        <UserAvatar imgUrl={avatarImage} />
        <Link href="/">Ktoś</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="/">Zarządzaj profilami</Link>
      </StyledListItem>
    </StyledList>
    <hr style={{ marginBottom: '10px' }} />
    <Link href="/">Dzieci</Link>
    <hr style={{ marginBottom: '10px', marginTop: '10px' }} />
    <StyledList>
      <Link href="/" isBold>
        Konto
      </Link>
      <Link href="/" isBold>
        Centrum
      </Link>
      <Link href="/" isBold>
        Wyloguj się
      </Link>
    </StyledList>
  </StyledUserDropDown>
);

UserDropDown.propTypes = {
  className: PropTypes.string,
};

UserDropDown.defaultProps = {
  className: null,
};

export default UserDropDown;
