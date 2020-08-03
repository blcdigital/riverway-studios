import React from 'react';

import LogoSVG from './LogoSVG';
import { WrapperSt } from './Logo.style';

function Logo({ ...rest }) {
  return (
    <WrapperSt {...rest}>
      <LogoSVG />
      <span hidden>Riverway Studios</span>
    </WrapperSt>
  );
}

export default Logo;
