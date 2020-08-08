import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt } from './Hero.style';

function Hero({ title }) {
  return (
    <WrapperSt>
      <ContainerFluid>
        <h1>{title}</h1>
      </ContainerFluid>
    </WrapperSt>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
};

export default Hero;
