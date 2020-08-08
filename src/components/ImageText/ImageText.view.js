import React from 'react';
import PropTypes from 'prop-types';

import ContaienrFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, ContentSt, ImageSt } from './ImageText.style';

function ImageText({ children, image }) {
  return (
    <WrapperSt>
      <ContaienrFluid>
        <ImageSt>{image && <img alt="" src={image} />}</ImageSt>
        <ContentSt>{children}</ContentSt>
      </ContaienrFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default ImageText;
