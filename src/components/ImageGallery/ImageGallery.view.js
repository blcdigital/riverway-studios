import React from 'react';
import PropTypes from 'prop-types';
import Gallery from '@browniebroke/gatsby-image-gallery';

import ContainerFluid from 'components/_atoms/ContainerFluid';

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
      <ContainerFluid>
        {title && <TitleSt>{title}</TitleSt>}

        <Gallery images={imagesWithCaption} lightboxOptions={lightboxOptions} />
      </ContainerFluid>
    </WrapperSt>
  );
}

WrapperSt.propTypes = {
  title: PropTypes.string,
};

export default ImageGallery;
