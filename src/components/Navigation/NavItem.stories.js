import React from 'react';
import NavItem from 'components/Navigation/NavItem';

export default {
  title: 'NavItem',
  component: NavItem,
};

export const Primary = () => <NavItem>Lol</NavItem>;
export const PrimaryNavigate = () => <NavItem navigate>Lol</NavItem>;
