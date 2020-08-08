import React from 'react';
import { Link } from 'gatsby';

import ContaienrFluid from 'components/_atoms/ContainerFluid';
import Logo from 'components/_atoms/Logo';
import Menu from 'components/_atoms/Menu';

import {
  WrapperSt,
  ContactSt,
  CopyrightSt,
  NavigationSt,
  SiteTitleSt,
} from './Footer.style';

function Footer() {
  return (
    <WrapperSt>
      <ContaienrFluid>
        <NavigationSt>
          <Menu />
        </NavigationSt>

        <ContactSt>
          <p>
            <a href="tel:07760 160638">07760 160638</a>
            <br />
            <a href="mailto:mail@riverwaystudios.co.uk">
              mail@riverwaystudios.co.uk
            </a>
          </p>

          <SiteTitleSt>
            <Link to="/">
              <Logo withDarkBackground />
            </Link>
          </SiteTitleSt>
        </ContactSt>

        <CopyrightSt>&copy; 2020 Riverway Studios</CopyrightSt>
      </ContaienrFluid>
    </WrapperSt>
  );
}

export default Footer;
