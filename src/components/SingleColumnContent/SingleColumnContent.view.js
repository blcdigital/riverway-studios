import React from 'react';
import PropTypes from 'prop-types';

import ContaienrFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, TitleSt } from './SingleColumnContent.style';

function TwoColumnText({ children, title, ...rest }) {
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
  align: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default TwoColumnText;
