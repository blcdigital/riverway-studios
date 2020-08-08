import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt } from './Standfirst.style';

function Standfirst({ children }) {
  return (
    <ContainerFluid>
      <WrapperSt>{children}</WrapperSt>
    </ContainerFluid>
  );
}

Standfirst.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Standfirst;
