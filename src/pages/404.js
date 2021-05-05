import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import SingleColumnContent, {
  CtaSt as SingleColumnCtaSt,
} from 'components/SingleColumnContent';

import HeroImage from 'images/header-img-recording.jpg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Hero image={HeroImage} title="Page not found" />

    <SingleColumnContent align="center">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <SingleColumnCtaSt align="center">
        <Button as={Link} level="button" to="/">
          Back to the Homepage
        </Button>
      </SingleColumnCtaSt>
    </SingleColumnContent>
  </Layout>
);

export default NotFoundPage;
