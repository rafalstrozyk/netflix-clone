import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  vertical-align: middle;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: 4px;
`;

const UserAvatar = ({ size, imgUrl }) => <StyledImage src={imgUrl} size={size} alt="avatar" />;

UserAvatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

UserAvatar.defaultProps = {
  size: '32px',
};

export default UserAvatar;
