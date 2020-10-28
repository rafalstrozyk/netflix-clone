import React from 'react';
import styled from 'styled-components';
import NavigationItem from 'components/Navigation/NavItem';

const PinningHeader = styled.div`
  height: 70px;
  z-index: 2;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4%;
  font-size: 1.2rem;
`;

const PrimaryNavigation = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavigationTab = styled.li`
  list-style-type: none;
  margin-left: 18px;
`;

const SecondaryNavigation = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;
`;

const Navigation = () => (
  <PinningHeader>
    <a href="/">Logo</a>
    <PrimaryNavigation>
      <NavigationTab>
        <NavigationItem navigate>Strona główna</NavigationItem>
      </NavigationTab>
      <NavigationTab>
        <NavigationItem> Seriale i programy</NavigationItem>
      </NavigationTab>
      <NavigationTab>
        <NavigationItem>Filmy</NavigationItem>
      </NavigationTab>
      <NavigationTab>
        <NavigationItem>Najnowsze</NavigationItem>
      </NavigationTab>
      <NavigationTab>
        <NavigationItem>Moja lista</NavigationItem>
      </NavigationTab>
    </PrimaryNavigation>
    <SecondaryNavigation>
      <div>NavElement</div>
      <div>NavElement</div>
      <div>NavElement</div>
    </SecondaryNavigation>
  </PinningHeader>
);

export default Navigation;