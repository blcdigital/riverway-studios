import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import CookieInformation from 'components/CookieInformation';

import HeroImage from 'images/header-img-recording.png';
import HeroImage2x from 'images/header-img-recording@2x.png';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cookie information" />

      <Hero
        image={HeroImage}
        image2x={HeroImage2x}
        title="Cookie information"
      />

      <CookieInformation />
    </Layout>
  );
};

export default IndexPage;
