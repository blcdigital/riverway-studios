import React from 'react';
import PropTypes from 'prop-types';

import { BREAKPOINTS } from 'styles/media';

import { WrapperSt, ImageSt } from './ImageStrip.style';

function ImageStrip({ largeScreenImage, smallScreenImage }) {
  return (
    <WrapperSt>
      <ImageSt>
        <source
          media={`(min-width: ${BREAKPOINTS.medium}px)`}
          srcSet={largeScreenImage}
        />
        <img alt="" src={smallScreenImage} />
      </ImageSt>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  largeScreenImage: PropTypes.string.isRequired,
  smallScreenImage: PropTypes.string.isRequired,
};

export default ImageStrip;
