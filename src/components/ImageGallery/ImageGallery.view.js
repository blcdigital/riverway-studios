import React from 'react';
import PropTypes from 'prop-types';
import Gallery from '@browniebroke/gatsby-image-gallery';

import ContaienrFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, TitleSt } from './ImageGallery.style';

function ImageGallery({ images, title, ...rest }) {
  const imagesWithCaption = images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.thumb.originalName,
  }));
  const lightboxOptions = {
    imageLoadErrorMessage: 'An error occured loading the image',
    nextLabel: 'Next image',
    prevLabel: 'Previous image',
    zoomInLabel: 'Zoom',
    zoomOutLabel: 'Unzoom',
    closeLabel: 'Close',
  };

  return (
    <WrapperSt>
      <ContaienrFluid>
        {title && <TitleSt>{title}</TitleSt>}

        <Gallery images={imagesWithCaption} lightboxOptions={lightboxOptions} />
      </ContaienrFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  title: PropTypes.string,
};

export default ImageGallery;
