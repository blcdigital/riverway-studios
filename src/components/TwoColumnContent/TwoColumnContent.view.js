import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, TitleSt } from './TwoColumnContent.style';

function TwoColumnText({ children, title, ...rest }) {
  return (
    <WrapperSt {...rest}>
      <ContainerFluid>
        {title && <TitleSt>{title}</TitleSt>}
        {children}
      </ContainerFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default TwoColumnText;
