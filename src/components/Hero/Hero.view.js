import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt } from './Hero.style';

function Hero({ isExpanded, title }) {
  return (
    <WrapperSt isExpanded={isExpanded}>
      <ContainerFluid>
        <h1>{title}</h1>
      </ContainerFluid>
    </WrapperSt>
  );
}

Hero.propTypes = {
  isExpanded: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  isExpanded: false,
};

export default Hero;
