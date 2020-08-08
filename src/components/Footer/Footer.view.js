import React from 'react';
import { Link } from 'gatsby';

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
      </ContactSt>

      <SiteTitleSt>
        <Link to="/">
          <Logo withDarkBackground />
        </Link>
      </SiteTitleSt>

      <CopyrightSt>&copy; 2020 Riverway Studios</CopyrightSt>
    </WrapperSt>
  );
}

export default Footer;
