import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero title="A flexible recording and rehearsal space in the heart of Essex" />
  </Layout>
);

export default IndexPage;
