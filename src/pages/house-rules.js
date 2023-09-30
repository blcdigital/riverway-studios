import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import SingleColumnContent from 'components/SingleColumnContent';

import HeroImage from 'images/header-img-recording.jpg';
import HouseRules from 'components/HouseRules';

const IndexPage = () => (
  <Layout>
    <SEO title="House rules" />

    <Hero image={HeroImage} title="House rules" />

    <SingleColumnContent>
      <p>
        A warm welcome to rehearsals at Riverway Studios! We are a friendly,
        family run business.
      </p>
      <p>
        We take a very relaxed, “hands-off” approach. We do not supervise all
        rehearsal times at our studio. We want everyone to enjoy their
        rehearsals undisturbed and problem-free.
      </p>
      <p>As such, we ask kindly that everyone respects our house rules.</p>

      <HouseRules />
    </SingleColumnContent>
  </Layout>
);

export default IndexPage;
