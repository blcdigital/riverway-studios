import React, { useState } from 'react';

import ContainerFluid from 'components/_atoms/ContainerFluid';
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
      <ContainerFluid>
        <SiteTitleSt to="/">
          <Logo isSiteTitle />
        </SiteTitleSt>

        <div>
          <NavigationToggleSt type="button" onClick={handleNavigationToggle}>
            Menu
          </NavigationToggleSt>

          <NavigationSt isOpen={isOpen}>
            <NavigationToggleSt type="button" onClick={handleNavigationToggle}>
              Close
            </NavigationToggleSt>

            <Menu handleNavigationClick={handleNavigationClick} />
          </NavigationSt>
        </div>
      </ContainerFluid>
    </WrapperSt>
  );
}

export default Header;
