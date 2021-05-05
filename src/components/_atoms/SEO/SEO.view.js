/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import HeroImage from 'images/header-large.jpg';
function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          href: `https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap`,
          rel: `stylesheet`,
        },
      ]}
      title={
        title
          ? `${title} | ${site.siteMetadata.title}`
          : site.siteMetadata.title
      }
      meta={[
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title
            ? `${title} | ${site.siteMetadata.title}`
            : site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `https://riverwaystudios.co.uk${HeroImage}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://riverwaystudios.co.uk/`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title
            ? `${title} | ${site.siteMetadata.title}`
            : site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
