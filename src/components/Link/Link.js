import styled from 'styled-components';

const Link = styled.a`
  color: ${({ color, theme }) => color || theme.fontColorSecondaryOne};
  font-weight: ${({ isBold }) => isBold && 700};
  :hover {
    text-decoration: underline;
    outline: 0;
  }
`;

export default Link;
