import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt } from './Hero.style';

function Hero({ image, image2x, isExpanded, title }) {
  return (
    <WrapperSt image={image} image2x={image2x} isExpanded={isExpanded}>
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
