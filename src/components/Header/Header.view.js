import React, { useState } from 'react';

import ContaienrFluid from 'components/_atoms/ContainerFluid';
import Logo from 'components/_atoms/Logo';
import Menu from 'components/_atoms/Menu';

import {
  WrapperSt,
  NavigationSt,
  NavigationToggleSt,
  SiteTitleSt,
} from './Header.style';

function Header({ ...rest }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = () => setIsOpen(false);

  const handleNavigationToggle = () => setIsOpen(!isOpen);

  return (
    <WrapperSt {...rest}>
      <ContaienrFluid>
        <SiteTitleSt to="/">
          <Logo isSiteTitle />
        </SiteTitleSt>

        <div>
          <NavigationToggleSt type="button" onClick={handleNavigationToggle}>
            Menu
          </NavigationToggleSt>

          <NavigationSt isOpen={isOpen}>
            <Menu handleNavigationClick={handleNavigationClick} />
          </NavigationSt>
        </div>
      </ContaienrFluid>
    </WrapperSt>
  );
}

export default Header;
