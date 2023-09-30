import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, ContentSt, ImageSt, TitleSt } from './ImageText.style';

function ImageText({ children, image, title, ...rest }) {
  return (
    <WrapperSt {...rest}>
      <ContainerFluid>
        {image && (
          <ImageSt>
            {' '}
            <img alt="" src={image} />
          </ImageSt>
        )}
        <ContentSt>
          {title && <TitleSt>{title}</TitleSt>}

          {children}
        </ContentSt>
      </ContainerFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  imageLeft: PropTypes.bool,
};

export default ImageText;
