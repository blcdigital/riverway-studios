import React, { useState } from 'react';
import { Link } from 'gatsby';

import ContaienrFluid from 'components/_atoms/ContainerFluid';
import Logo from 'components/_atoms/Logo';

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
            <ul>
              <li>
                <Link to="/recording" onClick={handleNavigationClick}>
                  Recording
                </Link>
              </li>
              <li>
                <Link to="/rehearsal" onClick={handleNavigationClick}>
                  Rehearsal
                </Link>
              </li>
              <li>
                <Link to="/tour" onClick={handleNavigationClick}>
                  Tour
                </Link>
              </li>
              <li>
                <Link to="/vouchers" onClick={handleNavigationClick}>
                  Vouchers
                </Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={handleNavigationClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </NavigationSt>
        </div>
      </ContaienrFluid>
    </WrapperSt>
  );
}

export default Header;
