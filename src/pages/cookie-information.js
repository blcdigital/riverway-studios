import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import CookieInformation from 'components/CookieInformation';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cookie information" />

      <Hero title="Cookie information" />

      <CookieInformation />
    </Layout>
  );
};

export default IndexPage;
