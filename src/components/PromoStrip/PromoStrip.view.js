import React from 'react';
import PropTypes from 'prop-types';

import ContaienrFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, TitleSt } from './PromoStrip.style';

function PromoStrip({ children, title, ...rest }) {
  return (
    <WrapperSt {...rest}>
      {title && <TitleSt>{title}</TitleSt>}
      <ContaienrFluid>{children}</ContaienrFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default PromoStrip;
