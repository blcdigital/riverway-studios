import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import ImageGallery from 'components/ImageGallery';

import HeroImage from 'images/header-img-gallery.jpg';

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Studio tour" />

    <Hero image={HeroImage} title="Tour" />

    <ImageGallery images={data.images} title="Studio features" />
  </Layout>
);

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "tour" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 346, maxHeight: 246) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
