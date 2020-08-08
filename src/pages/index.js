import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import ImageText, { CtaSt } from 'components/ImageText';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      isExpanded
      title="A flexible recording and rehearsal space in the heart of Essex"
    />

    <ImageText image="https://placekeanu.com/500">
      <p>
        Riverway Studios combines the best equipped music recording studios and
        the largest set of music rehearsal studios in the Hertfordshire and
        Essex area. We have been open for over 14 years now, and are a well
        known and loved part of the local music community! Our practice rooms
        are home to many faces of the local music scene; come join us!
      </p>

      <p>
        Located just off Edinburgh Way in Harlow, Essex, we are a 5 minute drive
        from Junction 7 of the M11, providing easy access to North London,
        Epping, Bishops Stortford, Stansted and beyond.
      </p>

      <CtaSt>
        <Button as={Link} to="/contact-us">
          Find us
        </Button>
      </CtaSt>
    </ImageText>
  </Layout>
);

export default IndexPage;
