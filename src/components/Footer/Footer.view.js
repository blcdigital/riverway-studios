import React from 'react';
import { Link } from 'gatsby';

import ContainerFluid from 'components/_atoms/ContainerFluid';
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
      <ContainerFluid>
        <NavigationSt>
          <Menu isFooter />
        </NavigationSt>

        <ContactSt>
          <p>
            <a href="tel:07760 160638">07760 160638</a>
            <br />
            <a href="mailto:mail@riverwaystudios.co.uk">
              mail@riverwaystudios.co.uk
            </a>
          </p>

          <div>
            <SiteTitleSt>
              <Link to="/">
                <Logo withDarkBackground />
              </Link>
            </SiteTitleSt>

            <CopyrightSt>&copy; 2021 Riverway Studios</CopyrightSt>
          </div>
        </ContactSt>
      </ContainerFluid>
    </WrapperSt>
  );
}

export default Footer;
