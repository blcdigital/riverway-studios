import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import CookieInformation from 'components/CookieInformation';

import HeroImage from 'images/header-img-recording.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cookie information" />

      <Hero image={HeroImage} title="Cookie information" />

      <CookieInformation />
    </Layout>
  );
};

export default IndexPage;
