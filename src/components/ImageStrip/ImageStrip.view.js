import React from 'react';
import PropTypes from 'prop-types';

import { BREAKPOINTS } from 'styles/media';

import { WrapperSt, ContentSt, ImageSt } from './ImageStrip.style';

function ImageStrip({
  children,
  largeScreenImage,
  minHeight,
  smallScreenImage,
}) {
  return (
    <WrapperSt minHeight={minHeight}>
      <ImageSt minHeight={minHeight}>
        <source
          media={`(min-width: ${BREAKPOINTS.medium}px)`}
          srcSet={largeScreenImage || smallScreenImage}
        />
        <img alt="" src={smallScreenImage} />
      </ImageSt>

      {children && <ContentSt>{children}</ContentSt>}
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  children: PropTypes.node,
  largeScreenImage: PropTypes.string,
  minHeight: PropTypes.number,
  smallScreenImage: PropTypes.string.isRequired,
};

export default ImageStrip;
