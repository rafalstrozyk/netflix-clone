import React from 'react';
import styled from 'styled-components';
import NavigationItem from 'components/Navigation/NavItem';
import ButtonIcon from 'components/Buttons/ButtonIcon';
import Logo from 'components/Logo';
import AcountMenuItem from 'components/Navigation/AcountMenuItem';
import Search from 'components/Navigation/Search';
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as CakeIcon } from 'assets/icons/cake.svg';

const PinningHeader = styled.div`
  height: 70px;
  z-index: 2000;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
  position: fixed;
  top: -6px;
  left: 0;
  right: 0;
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

  > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const StyledLogo = styled(Logo)`
  margin-right: 5px;
`;

const Navigation = () => {
  return (
    <PinningHeader>
      <StyledLogo href="/" />
      <PrimaryNavigation>
        <NavigationTab>
          <NavigationItem exact to="/">
            Strona główna
          </NavigationItem>
        </NavigationTab>
        <NavigationTab>
          <NavigationItem to="/programs"> Seriale i programy</NavigationItem>
        </NavigationTab>
        <NavigationTab>
          <NavigationItem to="/films">Filmy</NavigationItem>
        </NavigationTab>
        <NavigationTab>
          <NavigationItem to="/new">Najnowsze</NavigationItem>
        </NavigationTab>
        <NavigationTab>
          <NavigationItem to="/my-list">Moja lista</NavigationItem>
        </NavigationTab>
      </PrimaryNavigation>
      <SecondaryNavigation>
        <Search />
        <ButtonIcon Icon={CakeIcon} type="a" />
        <ButtonIcon Icon={BellIcon} type="button" />
        <AcountMenuItem />
      </SecondaryNavigation>
    </PinningHeader>
  );
};

export default Navigation;
