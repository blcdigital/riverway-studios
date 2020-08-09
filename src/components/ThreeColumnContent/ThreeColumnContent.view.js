import React from 'react';
import PropTypes from 'prop-types';

import ContaienrFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, TitleSt } from './ThreeColumnContent.style';

function ThreeColumnContent({ children, title, ...rest }) {
  return (
    <WrapperSt {...rest}>
      <ContaienrFluid>
        {title && <TitleSt>{title}</TitleSt>}
        {children}
      </ContaienrFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default ThreeColumnContent;
